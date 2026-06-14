'use client';

import { useEffect, useState } from 'react';
import Chat from '@/app/components/Chat';

/**
 * Iframe target for the embed widget on ai.output.systems.
 *
 * The injecting script (public/embed.js) postMessages the host page's
 * pathname here so page-context-aware greetings still work despite
 * the iframe being on ai.output.systems.
 *
 *   <iframe src="https://ai.output.systems/embed/widget?ref=...">
 *
 * The host page's pathname arrives via postMessage with shape:
 *   { type: 'output-chatbot:host-context', pagePath, refParam }
 */
export default function EmbedWidgetPage() {
  const [pageContext, setPageContext] = useState<string | null>(null);
  const [refParam, setRefParam] = useState<string | null>(null);
  const [contextReady, setContextReady] = useState(false);

  useEffect(() => {
    // Read query string immediately as a fallback (host page can pass via URL).
    const params = new URLSearchParams(window.location.search);
    const initialRef = params.get('ref');
    const initialPage = params.get('host');
    if (initialRef) setRefParam(initialRef);
    if (initialPage) setPageContext(initialPage);

    // Listen for postMessage from the host page (preferred — keeps URLs clean).
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data || typeof data !== 'object') return;
      if (data.type !== 'output-chatbot:host-context') return;

      if (typeof data.pagePath === 'string') setPageContext(data.pagePath);
      if (typeof data.refParam === 'string') setRefParam(data.refParam);
      setContextReady(true);
    }
    window.addEventListener('message', onMessage);

    // Mark ready after a short tick so Chat can mount with whatever we have.
    const timer = window.setTimeout(() => setContextReady(true), 200);

    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(timer);
    };
  }, []);

  if (!contextReady) {
    return (
      <main className="h-screen w-screen bg-black text-white/40 flex items-center justify-center text-sm">
        loading
      </main>
    );
  }

  return (
    <main className="h-screen w-screen bg-black overflow-hidden">
      <Chat
        embedMode
        pageContextOverride={pageContext}
        refParamOverride={refParam}
      />
    </main>
  );
}
