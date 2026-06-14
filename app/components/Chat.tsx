'use client';

import { useState, useRef, useEffect, useMemo, type ReactNode } from 'react';

export interface ChatProps {
  /**
   * When true, renders without the Output header/branding chrome — for embed
   * iframes where the host page provides its own framing.
   */
  embedMode?: boolean;
  /** Cal.com booking URL. Defaults to https://cal.com/output-systems. */
  calComUrl?: string;
  /**
   * Override the resolved page path. Used when the chatbot is embedded inside
   * an iframe and the host page passes its location via postMessage or query string.
   */
  pageContextOverride?: string | null;
  /** Override the ref param. Same use case as pageContextOverride. */
  refParamOverride?: string | null;
  /**
   * Visual theme. Defaults to 'dark' to keep the main site untouched. The
   * standalone /demo page passes 'light' when the visitor toggles it.
   */
  theme?: 'dark' | 'light';
  /**
   * Hide the leading hero headline. Used by the demo page which provides its
   * own framing above the chat.
   */
  hideHero?: boolean;
  /**
   * Hide the consent card, greeting paragraph, and pre-baked suggestion
   * buttons. Used by the demo page which keeps the empty state minimal.
   */
  hideEmptyState?: boolean;
  /**
   * Hide the "Book A Free Call" and "Privacy Policy" links below the input.
   * Used by the demo page so scrapers and prospects see a focused UX.
   */
  hideFooterLinks?: boolean;
  /**
   * When true and no messages exist yet, center the input vertically in the
   * available space and drop the sticky-to-bottom positioning and border.
   * Once a message is sent, falls back to the normal sticky-bottom layout.
   */
  centerInputWhenEmpty?: boolean;
  /**
   * Called whenever the message count crosses the empty/non-empty boundary.
   * Lets the demo page hide its own bullets once a conversation starts.
   */
  onConversationStateChange?: (hasMessages: boolean) => void;
  /**
   * Bumps the outer wrapper from max-w-3xl to max-w-4xl and the centered-empty
   * inner wrapper from max-w-2xl to max-w-4xl. Used by the demo page to give
   * the input box more breathing room.
   */
  wideChat?: boolean;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Default booking destination. Cal.com isn't set up yet — the BOOK A FREE
// DISCOVERY CALL pill in the chat footer points at /contact for now. Swap
// for a Cal.com URL once Curtis has the calendar wired.
const DEFAULT_CALCOM_URL = '/contact';

// Matches absolute ai.output.systems URLs and the relative paths the chatbot
// is allowed to emit (kept in sync with the system-prompt's "approved paths"
// list). Stops at whitespace and common trailing punctuation so a URL at the
// end of a sentence doesn't grab the period or comma.
const LINK_URL_REGEX =
  /(?:https?:\/\/(?:chat\.output\.systems|cal\.com\/output-systems)(?:\/[^\s)>,.;!?]*)?|\/(?:intelligent-chat-systems\/[a-z-]+|process|about|compliance|contact|privacy-policy)\b)/g;

// Friendly labels for paths the chatbot is allowed to emit (matches the
// "approved paths" list in lib/system-prompt.ts).
const PATH_LABELS: Record<string, string> = {
  '': 'chat.output.systems',
  '/': 'Home',
  '/process': 'Our Process',
  '/about': 'About Us',
  '/compliance': 'Privacy and Data',
  '/contact': 'Contact Us',
  '/privacy-policy': 'Privacy Policy',
  '/intelligent-chat-systems/standard': 'Standard Intelligent Website Chat System',
  '/intelligent-chat-systems/service': 'Service Business Chat System',
  '/intelligent-chat-systems/retail': 'Retail and E-Commerce Chat System',
  '/intelligent-chat-systems/internal': 'Internal Chat System',
  '/intelligent-chat-systems/custom': 'Custom Chat System',
};

function labelForUrl(url: string): string {
  if (url.includes('cal.com')) return 'book here';
  // Relative path (e.g., "/process") — look it up directly.
  if (url.startsWith('/')) {
    return PATH_LABELS[url] ?? url;
  }
  // Absolute chat.output.systems URL.
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/$/, '');
    return PATH_LABELS[path] ?? url;
  } catch {
    return url;
  }
}

// Replace every recognized URL in an assistant message with a clickable teal
// link. Returns an array of strings and anchor elements that React can render
// inline; preserves the surrounding text verbatim.
function renderAssistantContent(content: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  LINK_URL_REGEX.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = LINK_URL_REGEX.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    parts.push(
      <a
        key={`link-${key++}`}
        href={match[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1ae0cb] underline"
      >
        {labelForUrl(match[0])}
      </a>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [content];
}

// Voice-input dedup helpers. Mobile Chrome's continuous-mode speech
// recognition can emit the same word several times in a row, and the rapid
// restart cycle can re-transcribe audio that the previous session already
// finalized. Both fall away with these two passes.

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
}

// Merge a single recognition-result transcript into the accumulator.
// If `chunk` starts with what we already have, the engine is in cumulative
// mode (each new final restates everything) and we replace. Otherwise it's
// incremental (this chunk is a new utterance) and we append with a space.
function mergeChunk(accumulator: string, chunk: string): string {
  if (!chunk) return accumulator;
  if (!accumulator) return chunk;
  const accLower = accumulator.trim().toLowerCase();
  const chunkLower = chunk.trim().toLowerCase();
  if (accLower && chunkLower.startsWith(accLower)) {
    return chunk;
  }
  return accumulator.replace(/\s+$/, '') + ' ' + chunk.replace(/^\s+/, '');
}

// Within a single session: drop a final word if it's an exact repeat of the
// previous final word. Conservative — only collapses immediate repeats.
function collapseConsecutive(text: string): string {
  if (!text) return text;
  const tokens = text.split(/(\s+)/);
  const out: string[] = [];
  let lastNorm = '';
  for (const tok of tokens) {
    if (!tok.trim()) {
      out.push(tok);
      continue;
    }
    const norm = normalizeWord(tok);
    if (norm && norm === lastNorm) continue;
    out.push(tok);
    lastNorm = norm;
  }
  return out.join('');
}

// Across sessions: when joining `addition` onto `existing`, strip the leading
// words of `addition` that already sit at the tail of `existing`. Caps the
// overlap window at 12 words so it stays cheap and doesn't over-merge.
function appendNoOverlap(existing: string, addition: string): string {
  const trimmedAdd = addition.trim();
  if (!trimmedAdd) return existing;
  const existingWords = existing.trim().split(/\s+/).filter(Boolean);
  const additionWords = trimmedAdd.split(/\s+/).filter(Boolean);
  const maxK = Math.min(existingWords.length, additionWords.length, 12);
  let overlap = 0;
  for (let k = maxK; k > 0; k--) {
    let match = true;
    for (let i = 0; i < k; i++) {
      const a = normalizeWord(existingWords[existingWords.length - k + i]);
      const b = normalizeWord(additionWords[i]);
      if (!a || a !== b) {
        match = false;
        break;
      }
    }
    if (match) {
      overlap = k;
      break;
    }
  }
  const newWords = additionWords.slice(overlap);
  if (newWords.length === 0) return existing;
  const sep = existing && !/\s$/.test(existing) ? ' ' : '';
  return existing + sep + newWords.join(' ');
}

// Live display while a session is in progress. `interim` doesn't get the
// dedup treatment — it's already a fresh partial from the current session.
function composeDisplay(committed: string, sessionFinals: string, interim: string): string {
  const merged = appendNoOverlap(committed, sessionFinals);
  if (!interim.trim()) return merged;
  const sep = merged && !/\s$/.test(merged) ? ' ' : '';
  return merged + sep + interim.trim();
}

export default function Chat({
  embedMode = false,
  calComUrl = DEFAULT_CALCOM_URL,
  pageContextOverride,
  refParamOverride,
  theme = 'dark',
  hideHero = false,
  hideEmptyState = false,
  hideFooterLinks = false,
  centerInputWhenEmpty = false,
  onConversationStateChange,
  wideChat = false,
}: ChatProps) {
  const isLight = theme === 'light';
  const t = {
    pageBg: isLight ? 'bg-white text-black' : 'bg-black text-white',
    stickyBg: isLight ? 'bg-white' : 'bg-black',
    topBorder: isLight ? 'border-black/10' : 'border-white/10',
    softBorder: isLight ? 'border-black/15' : 'border-white/15',
    consentCard: isLight ? 'border-black/10 bg-black/[0.02]' : 'border-white/10 bg-white/[0.02]',
    consentText: isLight ? 'text-black/70' : 'text-white/60',
    greetingText: isLight ? 'text-black/85' : 'text-white/85',
    suggestionBtn: isLight
      ? 'border-black/15 hover:border-[#1ae0cb] hover:bg-[#1ae0cb]/10 text-black/80'
      : 'border-white/15 hover:border-[#1ae0cb] hover:bg-[#1ae0cb]/5 text-white/80',
    assistantText: isLight ? 'text-black/90' : 'text-white/90',
    thinkingText: isLight ? 'text-black/50' : 'text-white/40',
    inputPlaceholder: isLight ? 'placeholder:text-black/40' : 'placeholder:text-white/40',
    privacyLink: isLight ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white',
  };

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [micError, setMicError] = useState<string | null>(null);
  const lastUserMessageRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  // Stays true between user mic-toggle clicks. onend uses it to decide
  // whether to auto-restart after Chromium ends the session (which it does
  // every few seconds on silence, even with continuous=true).
  const keepListeningRef = useRef(false);
  // Holds finalized transcript from prior auto-restart sessions so the
  // visible input survives restarts.
  const finalTranscriptRef = useRef('');

  const { refParam, pagePath } = useMemo(() => {
    if (typeof window === 'undefined') {
      return { refParam: null, pagePath: null };
    }
    const params = new URLSearchParams(window.location.search);
    const ref = refParamOverride ?? params.get('ref');
    const path = pageContextOverride ?? window.location.pathname;
    return {
      refParam: ref,
      pagePath: path,
    };
  }, [pageContextOverride, refParamOverride]);

  const lastUserIndex = messages.findLastIndex((m) => m.role === 'user');

  useEffect(() => {
    // Anchor the most recent user question to the top of the chat viewport so
    // the question and the start of the answer remain visible without the
    // user having to scroll back up. Keyed on lastUserIndex so a streaming
    // assistant reply doesn't re-trigger the scroll on every token.
    lastUserMessageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [lastUserIndex]);

  const hasMessages = messages.length > 0;
  useEffect(() => {
    onConversationStateChange?.(hasMessages);
  }, [hasMessages, onConversationStateChange]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const SR = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    setSpeechSupported(!!SR);

    return () => {
      try {
        recognitionRef.current?.abort();
      } catch {
        // ignore
      }
    };
  }, []);

  // Builds a fresh SpeechRecognition with continuous=true + an onend auto-restart
  // loop so the mic stays on across natural pauses until the user taps it off
  // (or hits send).
  //
  // Result handling has to deal with two browser dialects:
  //   - Incremental (most desktop Chrome): each entry in event.results is a
  //     distinct utterance, and the right move is to concatenate them.
  //   - Cumulative (some mobile Chrome / Safari builds): each new final entry
  //     contains the ENTIRE session transcript so far, growing every event.
  //     Concatenating these produces "okayokay sookay so I..." explosions.
  //
  // The resolver rebuilds finals from scratch per event: when the next final
  // starts with the prior accumulator, treat it as cumulative (replace),
  // otherwise treat it as incremental (append). collapseConsecutive and
  // appendNoOverlap remain as belt-and-suspenders for residual duplicates.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function createRecognition(SR: any) {
    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    // Tracks finalized (and deduped) text from THIS session only. onend folds
    // it into finalTranscriptRef before restarting.
    let sessionFinals = '';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let resolvedFinals = '';
      let resolvedInterim = '';
      for (let i = 0; i < event.results.length; i++) {
        const r = event.results[i];
        const transcript: string = r[0].transcript;
        if (r.isFinal) {
          resolvedFinals = mergeChunk(resolvedFinals, transcript);
        } else {
          resolvedInterim = mergeChunk(resolvedInterim, transcript);
        }
      }
      sessionFinals = collapseConsecutive(resolvedFinals);
      setInput(composeDisplay(finalTranscriptRef.current, sessionFinals, resolvedInterim));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      const code: string = event?.error ?? 'unknown';
      console.error('Speech recognition error:', code, event);
      if (code === 'not-allowed' || code === 'service-not-allowed') {
        keepListeningRef.current = false;
        setMicError('Microphone access is blocked. Check your browser permissions.');
        window.setTimeout(() => setMicError(null), 6000);
      } else if (code === 'audio-capture') {
        keepListeningRef.current = false;
        setMicError('No microphone found on this device.');
        window.setTimeout(() => setMicError(null), 6000);
      } else if (code === 'network') {
        keepListeningRef.current = false;
        setMicError('Voice input network error. Check your connection and try again.');
        window.setTimeout(() => setMicError(null), 6000);
      } else if (code === 'no-speech' || code === 'aborted') {
        // Transient — let onend auto-restart, no toast.
      } else {
        // Surface anything else so browser-specific failures (e.g. Edge using
        // a different recognition backend) become diagnosable instead of silent.
        setMicError(`Voice input error: ${code}. Tap the mic to try again.`);
        window.setTimeout(() => setMicError(null), 8000);
      }
    };

    recognition.onend = () => {
      finalTranscriptRef.current = appendNoOverlap(finalTranscriptRef.current, sessionFinals);
      sessionFinals = '';
      if (keepListeningRef.current) {
        const next = createRecognition(SR);
        recognitionRef.current = next;
        try {
          next.start();
          return;
        } catch (err) {
          console.error('Failed to restart recognition:', err);
          keepListeningRef.current = false;
          setMicError('Voice input stopped. Tap the mic to try again.');
          window.setTimeout(() => setMicError(null), 6000);
        }
      }
      setIsRecording(false);
    };

    return recognition;
  }

  function toggleMic() {
    if (typeof window === 'undefined') return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    const SR = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    if (!SR) return;

    setMicError(null);

    if (isRecording) {
      keepListeningRef.current = false;
      try {
        recognitionRef.current?.stop();
      } catch {
        // ignore
      }
      setIsRecording(false);
      return;
    }

    finalTranscriptRef.current = '';
    keepListeningRef.current = true;
    const recognition = createRecognition(SR);
    recognitionRef.current = recognition;

    try {
      recognition.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Failed to start recognition:', err);
      keepListeningRef.current = false;
      setMicError('Could not start voice input. Try again.');
      window.setTimeout(() => setMicError(null), 6000);
    }
  }

  async function sendMessage(content: string) {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    const fallbackContent = `I'm having trouble right now. Want to book a call directly? ${calComUrl}`;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          conversationId,
          pageContext: pagePath,
          refParam,
        }),
      });

      const contentType = response.headers.get('content-type') ?? '';
      const isStream = contentType.includes('application/x-ndjson') && response.body !== null;

      if (isStream) {
        // Streaming path: read ndjson chunks and update the trailing assistant
        // message as text arrives. The placeholder is only appended after the
        // first content event so the 'thinking' indicator stays visible until
        // Claude actually starts producing tokens.
        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let assistantContent = '';
        let placeholderAdded = false;

        const updateAssistant = (text: string) => {
          assistantContent = text;
          if (!placeholderAdded) {
            placeholderAdded = true;
          }
          setMessages([...newMessages, { role: 'assistant', content: assistantContent }]);
        };

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';

          for (const line of lines) {
            if (!line.trim()) continue;
            let event: { type?: string; text?: string; conversationId?: string };
            try {
              event = JSON.parse(line);
            } catch {
              continue;
            }
            if (event.type === 'delta' && typeof event.text === 'string') {
              updateAssistant(assistantContent + event.text);
            } else if (event.type === 'replace' && typeof event.text === 'string') {
              updateAssistant(event.text);
            } else if (event.type === 'done') {
              if (event.conversationId) {
                setConversationId(event.conversationId);
              }
            }
          }
        }

        // Stream ended before any content arrived (e.g., upstream cut out).
        // Surface the fallback so the visitor isn't left staring at nothing.
        if (!placeholderAdded) {
          setMessages([...newMessages, { role: 'assistant', content: fallbackContent }]);
        }
      } else {
        // Non-streaming JSON response: rate-limit, validation error, or
        // top-level failure. data.message holds whatever message to display.
        const data = await response.json();
        const assistantContent = data.message ?? fallbackContent;
        setMessages([...newMessages, { role: 'assistant', content: assistantContent }]);

        if (data.conversationId) {
          setConversationId(data.conversationId);
        }
      }
    } catch (error) {
      console.error('chat error', error);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: fallbackContent,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  const outerMaxWidth = wideChat ? 'max-w-4xl' : 'max-w-3xl';
  const innerCenteredMaxWidth = wideChat ? 'max-w-4xl' : 'max-w-2xl';

  const wrapperClass = embedMode
    ? `flex flex-col h-full ${t.pageBg}`
    : `flex-1 flex flex-col ${outerMaxWidth} w-full mx-auto px-4 sm:px-6 py-8`;

  const showEmptyContent = !hasMessages && !hideEmptyState;
  const showSuggestions = !hasMessages && !hideEmptyState;
  const showFooterLinks = !hideFooterLinks;
  const centeredEmpty = !hasMessages && centerInputWhenEmpty;

  // Pushes the centered input up to roughly 45% from the bottom (slightly above
  // vertical center) so the bullets above feel grounded in the page rather than
  // floating at the very top.
  const inputWrapperClass = centeredEmpty
    ? 'flex-1 flex items-center justify-center px-4 pb-[20vh]'
    : `sticky bottom-0 pt-3 px-4 pb-4 border-t ${t.stickyBg} ${t.topBorder}`;

  const inputForm = (
    <div className={centeredEmpty ? `w-full ${innerCenteredMaxWidth}` : 'w-full'}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <div className="relative w-full sm:flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder={
              embedMode
                ? 'Ask anything...'
                : "Ask a question, or describe what you're trying to solve..."
            }
            className={`w-full bg-[#1ae0cb]/5 border-2 border-[#1ae0cb] rounded-lg py-3 text-lg ${t.inputPlaceholder} focus:outline-none focus:border-[#1ae0cb] disabled:opacity-50 ${
              speechSupported ? 'pl-4 pr-12' : 'px-4'
            }`}
          />
          {speechSupported && (
            <button
              type="button"
              onClick={toggleMic}
              disabled={isLoading}
              aria-label={isRecording ? 'Stop voice input' : 'Start voice input'}
              aria-pressed={isRecording}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md transition disabled:opacity-50 ${
                isRecording
                  ? 'text-red-400 bg-red-400/15 animate-pulse'
                  : 'text-[#1ae0cb] hover:bg-[#1ae0cb]/10'
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-[#1ae0cb] text-black font-medium px-5 py-3 rounded-lg hover:opacity-90 disabled:opacity-70 transition w-full sm:w-auto"
        >
          Send
        </button>
      </form>
      {micError && (
        <p className="text-sm text-red-400 mt-2 text-center" role="status">
          {micError}
        </p>
      )}
      {showFooterLinks && (
        <div className="flex justify-between items-center mt-2 text-xs">
          <a
            href={calComUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1ae0cb] underline text-[13px]"
          >
            Book A Free Call
          </a>
          <a
            href="https://output.systems/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className={`${t.privacyLink} underline`}
          >
            Privacy Policy
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className={wrapperClass}>
      {hasMessages ? (
        <div className="flex-1 space-y-6 mb-6 overflow-y-auto px-4 py-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              ref={i === lastUserIndex ? lastUserMessageRef : null}
              className={msg.role === 'user' ? 'flex justify-end' : ''}
            >
              <div
                className={
                  msg.role === 'user'
                    ? 'bg-[#1ae0cb]/10 border border-[#1ae0cb]/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-base'
                    : `${t.assistantText} leading-relaxed whitespace-pre-wrap text-base`
                }
              >
                {msg.role === 'assistant' ? renderAssistantContent(msg.content) : msg.content}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === 'user' && (
            <div className={`${t.thinkingText} text-sm flex items-center gap-2`}>
              <span className="inline-block h-2 w-2 bg-[#1ae0cb] rounded-full animate-pulse" />
              thinking
            </div>
          )}
        </div>
      ) : showEmptyContent ? (
        <div className="flex-1 flex flex-col justify-center px-4 py-6">
          {!embedMode && !hideHero && (
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-4">
              Intelligent systems for{' '}
              <span className="text-[#1ae0cb]">high leverage output</span>
              <span className="text-[#1ae0cb]">.</span>
            </h1>
          )}
          <div className={`mb-6 px-4 py-3 border rounded-lg ${t.consentCard}`}>
            <p className={`text-sm md:text-base leading-relaxed ${t.consentText}`}>
              By chatting with us, you consent to Output Systems collecting and using your messages to respond to your inquiry and follow up if you book a call. Your data is handled in accordance with the governing laws of Canada, the USA, and Europe (GDPR, CASL, PIPEDA, PII, CCPA). See our Privacy Policy below for details.
            </p>
          </div>
        </div>
      ) : null}

      <div className={inputWrapperClass}>
        {showSuggestions && (
          <div className="flex flex-col gap-2 mb-3">
            <button
              type="button"
              onClick={() => sendMessage('How can you help my business?')}
              disabled={isLoading}
              className={`text-left text-sm border rounded-lg px-3 py-2 transition disabled:opacity-50 ${t.suggestionBtn}`}
            >
              How can you help my business?
            </button>
            <button
              type="button"
              onClick={() => sendMessage('How much does the service cost?')}
              disabled={isLoading}
              className={`text-left text-sm border rounded-lg px-3 py-2 transition disabled:opacity-50 ${t.suggestionBtn}`}
            >
              How much does the service cost?
            </button>
          </div>
        )}
        {inputForm}
      </div>
    </div>
  );
}
