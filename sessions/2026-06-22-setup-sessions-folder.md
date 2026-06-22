# 2026-06-22 — Set up sessions folder + CLAUDE.md

## Goal
User wanted a persistent history of work done in this project. Frustrated that there was no log of past conversations. Asked to create a `sessions/` folder and a `CLAUDE.md` that instructs the agent to always save a conversation summary to that folder.

## Changes
- Created `CLAUDE.md` at project root. Imports `AGENTS.md` and adds the session-log rule (template fields: Goal / Changes / Decisions / Follow-ups / Notes).
- Created `sessions/` directory with this file as the first entry.

## Decisions
- File naming: `YYYY-MM-DD-<slug>.md`. Append to today's file if the conversation is continuous, otherwise start a new one.
- CLAUDE.md imports `AGENTS.md` rather than duplicating its content, mirroring the pattern at `C:\Projects\CLAUDE.md`.

## Follow-ups
- None open. Future conversations should start logging here automatically per the new CLAUDE.md rule.

## Notes
- User asked early in the conversation whether "billing for the chat agent" happened here or elsewhere — confirmed it was a different conversation. No memory entry existed for it. If that comes up again, may be worth saving once we know the details.

---

# 2026-06-22 (cont.) — Pre-qualification rules + R3–R6 offer window

## Goal
User wanted the chat agent to start offering the Free Discovery Call earlier in the conversation, but only for visitors who are real prospects — not people selling TO us, fishing for free advice, students, etc. Asked for a separate pre-qualification doc with strict rules, and an intent-based offer window of "earliest reply 3, latest reply 6," with the system deciding where inside the window the offer lands.

## Changes
- New file: `chat_agent_prequalification_rules.md` (project root). Enumerates qualifying signals (strong + weak) and disqualifying signals (selling to us / free-advice fishing / students / competitors / off-topic), each with concrete example phrases. Defines the R3–R6 offer window with explicit gating conditions, plus an "offer immediately" override for visitors who ask to talk.
- Edited `chat_agent_voice_and_rules.md`: rewrote the Conversation Arc section to align with the new R3–R6 cadence, added R2 validation language ("this is the kind of thing we build for businesses like yours"), and pointed at the new pre-qual doc as the gate.
- Edited `lib/system-prompt.ts`: mirrored the new Conversation Arc inside the `VOICE_AND_RULES` const, added a new `PRE_QUALIFICATION_RULES` const containing the full pre-qual rules, and threaded it into `buildSystemPrompt` between voice rules and technical mechanics. Also updated `BEHAVIOR_RULES_ONLY` to include the pre-qual section.

## Decisions
- Pre-qual rules live in a dedicated file (not folded into the voice doc) because they are substantial and likely to evolve independently of voice.
- Examples are concrete phrases, not abstract categories. The model applies pattern-match examples way more reliably than category names.
- "Selling to us" is enumerated as Disqualifier #1 because user called it out explicitly.
- The R2 validation step uses "this is the kind of thing we build for businesses like yours" / "this sounds like something we could build for you" — only when true. Not blanket affirmation.
- `lib/system-prompt.ts` mirrors the markdown docs inline because the file's existing comment notes that Vercel's function bundle requires the rules be embedded as a JS string (not loaded from disk).

## Follow-ups
- User said they will review the new pre-qual MD in the next couple days. They may want signal tweaks once they read it.
- Worth tracking: are R3 offers landing too often? The R3-vs-R6 timing depends entirely on the model's per-turn judgment, so we won't be able to QA with "the call ask always comes at turn N." Plan to spot-check conversation transcripts after a few days of live traffic.
- The voice doc's "Lead Capture Behavior" section still says "Do not ask for contact information before building enough trust." That is still true — pre-qual is what defines when trust has been built. Left it as is, but worth re-reading after a week.

## Notes
- `lib/lead-email.ts` and the SUBMIT_LEAD marker pipeline already exist and were not touched. Resend wiring is intact, recipient is `connect@output.systems` (overridable via `HANDOFF_RECIPIENT` env var). The pre-qual change is purely about *when* the offer lands; the lead-capture infra is unchanged.
- Deployment: pushed to `main` on the GitHub remote, which triggers Vercel auto-deploy. Did not run `vercel --prod` manually.
