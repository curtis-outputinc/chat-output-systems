# Sister-Site Handoff — chat.output.systems

Paste the block below as the FIRST message in a fresh Claude Code conversation
opened inside the new project folder (`C:\Projects\03 chat-output-systems\`).

Before pasting:
1. Rename this folder from `03 ai-ouput-systems` to `03 ai-output-systems`
   (add the missing **t**) so the reference path in the prompt resolves.
2. Create the new sibling folder `C:\Projects\03 chat-output-systems\`.
3. Decide what to do with the current single-page site at chat.output.systems
   in Vercel — the new project will be deployed to that domain.

---

```
You are scaffolding a new website. There is a sister project on this machine
you will use as the reference — its components, styling, animations, layout,
and scaffolding are what we want to copy. Only the copy, corpus, domain, and
Supabase credentials will differ.

═══════════════════════════════════════════════════
REFERENCE PROJECT
═══════════════════════════════════════════════════

Path: C:\Projects\03 ai-output-systems\
Live site: https://ai.output.systems
Brand: "Output Systems" — generic intelligent-systems agency

You have full read access to this folder. Open files in it freely to copy
components, styles, structure, and behaviors. Do NOT modify anything inside
the reference project — it's already in production.

═══════════════════════════════════════════════════
THIS PROJECT — CONFIRMED
═══════════════════════════════════════════════════

Folder: C:\Projects\03 chat-output-systems\
Domain: chat.output.systems
        (this domain currently serves a one-page chat interface in Vercel;
         the new site will TAKE OVER that domain — confirm with Curtis
         that the old single-page is taken down or replaced before deploy)
Brand:  "Output Systems — Intelligent Chat Systems" (sub-brand of Output Systems)
Focus:  Intelligent Chat Systems exclusively — customer website chatbots,
        staff-facing knowledge chat, lead-capture chat.

Visual parity with the reference site is the goal. The new site should feel
like a sibling product page in the same family — same nodes background, same
teal accent, same Inter font, same sticky bottom pills, same nav/footer.

═══════════════════════════════════════════════════
READ FIRST (before writing any code)
═══════════════════════════════════════════════════

1. C:\Projects\AGENTS.md and C:\Projects\03 ai-output-systems\
   This stack is Next.js 16 with breaking changes from older versions.
   Read node_modules/next/dist/docs/ in the reference project before
   writing any routing, data-fetching, or metadata code.

2. C:\Projects\03 ai-output-systems\app\layout.tsx — root layout, Inter font,
   metadata defaults, theme init script

3. C:\Projects\03 ai-output-systems\app\globals.css — brand tokens:
     --color-brand-teal:  #07e4c6  (PRIMARY ACCENT)
     --color-brand-blue:  #385ee6
     --color-brand-green: #00ff2f
   Plus the critical rule: html, body { overflow-x: hidden; max-width: 100vw; }
   Keep this — it prevents mobile horizontal scroll.

4. C:\Projects\03 ai-output-systems\app\components\ — every component listed below

5. C:\Projects\03 ai-output-systems\public\embed.js — vanilla-JS floating chat
   bubble bootstrap. This new site WILL have its own embed.js (same style,
   different context). Copy and tailor.

6. C:\Projects\03 ai-output-systems\package.json, tsconfig.json, next.config.ts,
   postcss.config.mjs, vercel.json — copy these into the new project.

═══════════════════════════════════════════════════
COMPONENTS TO REUSE VERBATIM
═══════════════════════════════════════════════════

Copy these files from the reference's app/components/ into the new project's
app/components/. Identical, no behavior changes:

  AnimatedNodesBackground.tsx — full-viewport drifting teal-node canvas; the
                                 site's signature background. Lines hidden on mobile.
  IntegrationsMarquee.tsx     — "Seamlessly integrates with your favorite apps"
                                 infinite-scroll logo strip. Keep verbatim.
  MobileMenu.tsx              — hamburger menu for mobile (≤md)
  SiteNav.tsx                 — top nav, logo + links, accepts active prop
  SiteFooter.tsx              — bottom footer; vertical menu on mobile,
                                 horizontal on desktop, logo+copyright left
  StickyBookButton.tsx        — bottom "BOOK A FREE DISCOVERY CALL" pill
                                 (see "DO NOT REGRESS" section below)
  FadeIn.tsx                  — IntersectionObserver fade-in wrapper
  TypingHeading.tsx           — typewriter heading effect
  AnimatedStatCounter.tsx     — large kpi number that counts up on scroll
  AnimatedDashboard.tsx       — illustrative dashboard animation
  AnimatedBarGraph.tsx        — illustrative bar graph animation

Also copy Chat.tsx and the app/embed/widget/ route — this site has its
own chat UI and its own embed bubble.

═══════════════════════════════════════════════════
STICKY BOTTOM PILLS — DO NOT REGRESS
═══════════════════════════════════════════════════

We just spent multiple iterations tuning these. Keep them identical:

Desktop:
  Left/center: BOOK A FREE DISCOVERY CALL pill (StickyBookButton, centered)
  Bottom-right: chat bubble from embed.js (icon + 2-line label container)

Mobile (≤640px):
  Left 50% of viewport:  BOOK A FREE DISCOVERY CALL pill
                         (width 90% of its half, min-height 60px, font 12px,
                          letter-spacing 0.14em, padding 8px 10px, text
                          vertically centered via flex)
  Right 50% of viewport: "Chat with our AI-powered agent" pill
                         (same dimensions, same teal, same vertical centering,
                          PLUS a 32px round teal chat icon floated at
                          top:-22px; right:5% so it half-overlaps the top
                          edge of the pill)

embed.js labels (do NOT use the old strings):
  bubble label:    "Chat with our<br>AI-powered agent"  (NOT "Intelligent Chat System")
  panel header:    "INTELLIGENT WEBSITE CHAT SYSTEM"   (NOT "INTERACTIVE CHATBOT")

The greeting paragraph in Chat.tsx was deliberately removed
("Hey, what is the bottleneck you are trying to solve?" — gone). Keep it gone.

The consent text in Chat.tsx is text-sm md:text-base (NOT text-xs). Keep larger.

═══════════════════════════════════════════════════
ROUTES TO MIRROR
═══════════════════════════════════════════════════

  /                  — home / hero with animated nodes bg + integrations marquee
  /services          — chat-systems product breakdown (CONTENT DIFFERS)
  /process           — how engagements work
  /about             — about
  /contact           — form. Heading is exactly:
                       "Get in touch with us. We'll help you build exactly"
                       (new line)
                       "what your business needs." (teal, line below)
  /data-privacy      — privacy overview
  /privacy-policy    — legal
  /demo              — interactive chat demo
  /embed/widget      — iframe target for THIS site's embed.js
  /api/chat          — chat backend
  /api/contact       — contact form backend
  /admin/*           — internal dashboard (DEFER — content/facts will differ;
                        scaffold the routes only if Curtis greenlights)
  /api/cron/*        — only port the crons the new site actually needs

═══════════════════════════════════════════════════
WHAT DIFFERS FROM THE REFERENCE
═══════════════════════════════════════════════════

  - Page copy: all written for Intelligent Chat Systems specifically.
    Curtis will provide a corpus / content brief separately.
  - corpus/ directory contents: Curtis provides.
  - lib/system-prompt.ts: rewritten for the new corpus.
  - Domain + metadata: chat.output.systems. Update metadataBase, openGraph.url,
    title.template in app/layout.tsx.
  - Logo: reuse public/logo.png unless Curtis hands you a new mark.
  - Admin dashboard: defer until needed.
  - Supabase: this site gets its OWN Supabase project (separate from the
    reference's). See the Supabase section below.

═══════════════════════════════════════════════════
SUPABASE / BACKEND — NEW PROJECT
═══════════════════════════════════════════════════

This site uses Supabase for conversation persistence and (eventually) admin
analytics, BUT with a brand-new Supabase project — not the reference's.

  - Copy supabase/migrations/ from the reference into this project verbatim.
  - When Curtis is ready, create a new Supabase project, get its connection
    string + anon/service keys, and run the migrations against it.
  - DO NOT reuse the reference site's Supabase credentials under any
    circumstances.

═══════════════════════════════════════════════════
ENV / CREDENTIALS
═══════════════════════════════════════════════════

Copy .env.local from the reference into this project, then BLANK OUT every
value. The new project gets its own credentials filled in by Curtis later.

Specifically blank these (DO NOT carry over the reference values):
  - All SUPABASE_* keys
  - All VERCEL_* / deployment keys
  - All ANTHROPIC_API_KEY or other model API keys
  - Cal.com / calendar keys
  - Any webhook secrets

Keep the variable NAMES so the keys are visible to fill in. Just empty the values.

═══════════════════════════════════════════════════
SETUP CHECKLIST
═══════════════════════════════════════════════════

  1. Copy package.json, tsconfig.json, next.config.ts, postcss.config.mjs,
     vercel.json, AGENTS.md from C:\Projects\03 ai-output-systems\.
  2. npm install
  3. Copy app/globals.css verbatim.
  4. Copy app/layout.tsx; update metadataBase to chat.output.systems and
     swap title/description copy for chat-systems framing.
  5. Copy the components listed above into app/components/.
  6. Copy lib/insights/theme.ts (used by layout.tsx) and any other lib/
     helpers your routes actually need.
  7. Copy public/embed.js, public/favicon.png, public/logo.png. Tailor
     embed.js's panel header / labels if Curtis wants different strings
     for this site (default: keep the same labels we just shipped).
  8. Copy supabase/migrations/ verbatim. New Supabase project will be
     created/wired by Curtis.
  9. Copy .env.local; blank every value (see ENV section).
 10. Build out each page with the new (chat-systems) copy. Use FadeIn,
     TypingHeading, AnimatedNodesBackground, IntegrationsMarquee, etc.,
     the same way the reference home page (app/page.tsx) uses them.
 11. Mount <StickyBookButton /> and <Script src="/embed.js" strategy="afterInteractive" />
     at the bottom of every page (same as the reference).
 12. npm run build — must compile clean before deploying.
 13. In Vercel: confirm with Curtis what to do with the existing single-page
     chat.output.systems deploy (replace it or move it), then vercel link
     to the new project and vercel --prod.

═══════════════════════════════════════════════════
WHEN IN DOUBT
═══════════════════════════════════════════════════

Open the same file in C:\Projects\03 ai-output-systems\ and copy.
Visual parity with the reference site is the goal — only the words,
the corpus, the domain, and the credentials change.

Ask Curtis (do not guess):
  - What pages to build first vs defer
  - The new chat corpus content
  - When Supabase credentials are ready
  - When to take over chat.output.systems in Vercel
```
