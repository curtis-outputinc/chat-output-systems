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

---

# 2026-06-23 — Desktop chat bubble icon reduced 50%

## Goal
User asked to reduce the floating chat bubble icon on desktop by 50%. Confirmed the previous session's chat changes "all work" before this request.

## Changes
- `public/embed.js`: desktop bubble dropped 140px → 70px, SVG icon dropped 76px → 38px (exactly half). Mobile `@media (max-width:640px)` overrides at lines 68 (64px) and 79 (36px) untouched — phones stay the same size.

## Decisions
- Edited only the inline desktop default styles, not the mobile `@media` block. The two are independently sized for a reason (the mobile bubble sits inside a pill label).
- Did not touch any in-page chat input UI — the bubble lives only in the embed widget that other sites load via `<script src=".../embed.js">`.

## Follow-ups
- None open.

## Notes
- Verified locally with `curl http://localhost:3002/embed.js` after the dev server reported ready. Confirmed `width:70px` on the desktop bubble and `width="38" height="38"` on the desktop SVG appear in the served output. Mobile `width:64px !important` still present in the `@media` block.
- User got frustrated last session because I shipped without testing. From now on, no "go look at it" hand-offs — `feedback_test_before_reporting.md` in `~/.claude/projects/.../memory/` captures this rule.

---

# 2026-06-23 (cont.) — Abuse caps: 20 messages/conversation, 300 messages/IP/day

## Goal
Protect the chat endpoint against someone running up tokens. User asked for two hard caps: max 20 user messages per conversation, max 300 user messages per IP per day. Both implemented and enforced server-side.

## Changes
- `lib/rate-limit.ts`:
  - Added `MAX_REQUESTS_PER_DAY = 300` and `MAX_MESSAGES_PER_CONVERSATION = 20` constants.
  - Added `checkDailyLimit(ip)` — counts rows in the existing `rate_limits` table over a 24h window. Mirrors the hourly check, no insert (the hourly check already records the hit).
  - Added `checkConversationLimit(conversationId)` — counts `messages` rows with `role='user'` for the conversation. Uses the existing `messages(conversation_id, created_at)` index. Returns `{ allowed, count, limit }`.
  - Existing 30/IP/hour cap left untouched.
- `app/api/chat/route.ts`:
  - Imported the two new functions.
  - Order of checks now: hourly → daily → (parse body) → per-conversation → preFlight → model call.
  - Two new 429 responses with distinct error codes (`daily_limit_reached`, `conversation_limit_reached`) so the UI can surface the right message.

## Decisions
- Kept the abuse caps in `lib/rate-limit.ts` rather than a new module — they share the same `rate_limits` table and conceptually belong together.
- Per-conversation cap counts `messages` directly rather than tracking a counter on the `conversations` row. One less write path to maintain consistency on; the count query is indexed and cheap.
- Daily check does not insert — it leans on the hourly check's existing insert, which fires every successful request.
- Fail-open on DB errors (matches existing hourly behaviour). A DB blip should not deny legitimate visitors.

## Follow-ups
- None open. Caps now active in production.

## Notes
- Verified end-to-end against the local dev server before committing:
  1. First chat request (no convId) → HTTP 200, conversation created.
  2. Temporarily lowered `MAX_MESSAGES_PER_CONVERSATION = 1`. Second request with that convId → HTTP 429 `conversation_limit_reached`. Reverted to 20.
  3. Temporarily lowered `MAX_REQUESTS_PER_DAY = 1`. Fresh request from same IP → HTTP 429 `daily_limit_reached` with `resetSeconds: 86349`. Reverted to 300.
- Final typecheck clean, constants confirmed back at 300 / 20 before commit.
- Both caps use the same DB-backed pattern as the existing hourly limiter — same fail-open behaviour, same Supabase tables, no new schema needed.
