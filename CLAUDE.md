# Marketing Academy — Project Reference

## What This Is

A fully static, single-page web application that teaches digital marketing. No server, no framework, no build step. Open `index.html` in a browser and it works. Built with vanilla HTML, CSS, and JavaScript only.

**Live site:** https://marketing-academy-nine.vercel.app/
**GitHub repo:** https://github.com/robertjamesoxborough-arch/marketing-academy
**Vercel:** Auto-deploys when `main` branch is updated.

---

## What's Been Built

### Pages / Views (all in one index.html, toggled by JavaScript)

| Page | What It Does |
|------|-------------|
| **Home** | Hero section, how-it-works steps, learning path preview cards, CTA |
| **Start Here** | 8-question placement quiz that assigns Beginner/Intermediate/Advanced/Expert level + visual journey map |
| **Learning Paths** | 6 filterable learning paths with all lessons listed |
| **Lesson View** | Full lesson with sidebar nav, three-tab layout (Learn / Setup Guide / Tasks), inline quiz, mark complete, XP award, module project card |
| **Resource Library** | 21 curated external resources with filters and descriptions |
| **My Progress** | XP total, lessons completed, quizzes passed, streak tracker, per-path progress bars, activity feed |

### Learning Paths (all 102 lessons fully written and rewritten to 2026 standards)

| Path | Modules | Lessons |
|------|---------|---------|
| SEO | 5 | 18 |
| Paid Search | 3 | 16 |
| Social Media Advertising | 4 | 18 |
| Content & Inbound Marketing | 4 | 22 |
| Data & Analytics | 3 | 15 |
| Growth & Experimentation | 4 | 13 |

Every lesson has:
- Original written content (~400-600 words), rewritten against 2026 authoritative sources
- Callout boxes (Key Concept / Pro Tip / Common Mistake)
- A 4-option multiple choice quiz with explanation
- A Setup Guide tab (5 real-tool, hands-on steps)
- A Tasks tab (5 practical actions + reflection prompt)
- LocalStorage persistence for checklist ticks and reflection text

Every module has a project card on the final lesson with a `projectTitle` and `projectDescription`.

### Technical Features Working

- XP system — earn XP for completing lessons and quizzes
- Streak tracking — daily visit streak (Duolingo style)
- LocalStorage — all progress, tasks, and reflections save in the browser (no backend)
- Three-tab lesson layout — Learn / Setup Guide / Tasks
- Module project cards — appear on the final lesson of each module
- Recommended Next Lesson panel — slides up after lesson completion or correct quiz answer
- Ad slots — top banner, inline, and bottom placements (ready for monetisation)
- Fully responsive — mobile, tablet, desktop
- Placement quiz — assigns user a level on first visit

---

## File Structure

```
marketing-academy/
├── index.html          — All HTML, all page views, all ad slots, tab structure, next lesson panel
├── style.css           — All styling, responsive breakpoints, tab styles, task checklist, module project card, next lesson panel
├── app.js              — Navigation, data, lesson content (first 11 lessons), quiz logic, progress tracking, tab rendering, LocalStorage for tasks/reflections/module projects, getNextLesson(), showNextLessonPanel()
├── content-expanded.js — All remaining 91 lessons (loaded after app.js, uses Object.assign to extend lessonContent)
└── CLAUDE.md           — This file
```

### Key Data Structures in app.js

- `learningPaths` — Defines all 6 paths, their modules (each with `projectTitle` and `projectDescription`), and lesson metadata (id, title, duration, xp)
- `lessonContent` — Object keyed by lesson ID containing `title`, `body` (HTML), `quiz`, `setupGuide`, `tasks`, and `reflection` for the first 11 lessons
- `placementQuestions` — The 8 questions for the start-here quiz
- `resources` — The 21 curated resources for the library

`content-expanded.js` extends `lessonContent` with all remaining 91 lessons using `Object.assign(lessonContent, {...})`.

### Key Functions in app.js

| Function | What it does |
|----------|-------------|
| `openLesson(id)` | Loads lesson, renders tab bar, injects module project card on final module lessons |
| `switchLessonTab(tab, id)` | Toggles Learn / Setup Guide / Tasks panels |
| `renderSetupGuideTab(setupGuide)` | Returns HTML for numbered steps or "coming soon" |
| `renderTasksTab(id, tasks, reflection)` | Returns HTML for checklist + textarea, restores LocalStorage state |
| `saveTaskState(id, i, checked)` | Saves tasks_{lessonId} array to LocalStorage |
| `saveReflection(id)` | Saves reflection_{lessonId} with "Saved!" feedback |
| `completeModuleProject(pathId, modIdx)` | Saves moduleProject_{pathId}_{modIdx}, turns button green |
| `getNextLesson(id)` | Searches learningPaths to find the next lesson; returns null if last in path |
| `showNextLessonPanel(next, pathName)` | Shows Up Next or Path Complete panel |
| `hideNextLessonPanel()` | Called on navigation to reset panel state |

---

## Content Standard

All 102 lesson bodies have been rewritten against these authoritative sources. Content must never be copied verbatim — always rewritten in The Marketing Academy's original voice.

### Source List

**Platform Academies:** Google Skillshop, Google Digital Garage, Meta Blueprint, LinkedIn Marketing Labs, TikTok Academy, Amazon Ads Academy, Snapchat Focus, Microsoft Advertising Learning Lab

**Practitioner Academies:** HubSpot Academy, Ahrefs Academy, Semrush Academy, Moz Academy, CXL Institute, Reforge, Demand Curve, Shopify Learn, Hootsuite Academy

**Research & Insight Hubs:** Think with Google, Meta Business Insights, Google Search Central, Google Marketing Platform, Nielsen Insights

**Blogs:** HubSpot Marketing Blog, Ahrefs Blog, Semrush Blog, Content Marketing Institute, Mailchimp Marketing Library

**General Education:** Coursera, edX, LinkedIn Learning

### 2026 Content Standards by Path

**SEO:** E-E-A-T as the dominant quality framework, AI Overviews and GEO, Information Gain as a ranking signal, FAQ schema deprecated (May 2026), INP replacing FID in Core Web Vitals, topical authority over individual keywords, quality-first link building

**Paid Search:** AI Max for Search, Performance Max 2026 controls (campaign-level negatives, asset group reporting, placement exclusions, brand exclusions), call ads deprecated (use call assets in RSAs), first-party data as Smart Bidding input, broad match as semantic intent, Microsoft Copilot placements, Data-Driven Attribution as standard

**Social Media Advertising:** Meta Advantage+ and Lattice engine, CAPI as primary measurement tool, mandatory AI content disclosure, Threads as live placement, LinkedIn Campaign Groups to Campaigns / Campaigns to Ad Sets rename, LinkedIn native CRM integration, BrandLink, Company Attribution, TikTok Smart+ with module-level automation, Spark Ads as best practice

**Content & Inbound:** HubSpot Loop methodology (Express, Tailor, Amplify, Evolve) replacing the flywheel, AEO as a discipline alongside SEO, short-form video as primary ROI format, open rate deprecated as primary email metric (Apple MPP), SPF/DKIM/DMARC as baseline, automated flows as the email revenue engine, zero-party data for segmentation

**Data & Analytics:** GA4 as planning platform (not just reporting), DDA as default attribution model, Conversion Attribution Analysis Report (2026), per-conversion attribution settings, Consent Mode V2 enforced, three-tier measurement framework (GA4 / platform / CRM), Looker Studio as primary reporting output, Universal Analytics fully deprecated

**Growth & Experimentation:** North Star Metric as organising principle, AARRR as diagnostic tool not sequential funnel, retention as growth foundation, experiments vs optimisation vs A/B testing clearly distinguished, statistical significance plus effect size required, PLG as mainstream, AI as experimentation velocity accelerant

---

## What Is NOT Built Yet (Next Steps)

### High Priority

1. **Supabase anonymous sessions** — Replace LocalStorage with Supabase anonymous sessions so progress, XP, tasks, and reflections persist across cache clears and device switches. All LocalStorage keys migrate in one session. Phase 2: "Claim your progress" email prompt after 3 lessons converts anonymous to named account (email capture).
2. **Path completion certificate** — Congratulations screen + downloadable certificate image (pure HTML/CSS) when a user finishes all lessons in a path. Triggered by the null return from `getNextLesson()`.
3. **Search** — Client-side JS filter across lesson titles and path names. No dependencies needed.
4. **Mobile nav** — Verify and fix sidebar behaviour on small screens.

### Medium Priority

5. **Email capture** — Save your progress prompt (Formspree, static-compatible) after 3+ lessons completed.
6. **Progress reset** — Button in My Progress to clear all LocalStorage and start over.
7. **Difficulty filter** — Filter lessons by the user's assigned level from the placement quiz.

### Lower Priority

8. Dark mode, print/export, social sharing, analytics integration (GA4), related resources per lesson, glossary.

---

## How to Make Changes

### Via Claude Code (building)
Claude Code reads this file, edits `index.html`, `style.css`, `app.js`, and `content-expanded.js` directly, then commits and pushes to the feature branch.

### Via Claude Chat (planning)
Claude Chat audits, prioritises, researches current platform standards, writes briefs for content rewrites, and produces detailed Claude Code prompts.

### Content Updates
Before rewriting any lesson content, research current standards using live web search in Claude Chat. Build a brief with current terminology and corrections, then pass that brief to Claude Code as ground truth. Claude Code writes against the brief — it cannot browse the web itself.

### Deployment
Always develop on `claude/marketing-academy-website-Zwaz0`, not main. To deploy:

```
git -C ~/marketing-academy-real fetch origin && git -C ~/marketing-academy-real checkout main && git -C ~/marketing-academy-real merge origin/claude/marketing-academy-website-Zwaz0 --no-edit && git -C ~/marketing-academy-real push origin main
```

Vercel auto-deploys within approximately 30 seconds.

---

## Conventions

- **No frameworks** — Pure vanilla JS, HTML, CSS only. Do not introduce React, Vue, bundlers, or npm.
- **No backend** — Everything must work as a static file. Use LocalStorage for persistence (Supabase migration planned).
- **British English** — All content uses British English spelling (optimisation, colour, etc.)
- **Lesson format** — Every lesson must have: `title`, `body` (HTML string with h2 sections and callout boxes), `quiz` (question, 4 options, correct index, explanation), `setupGuide` (array of 5 step objects), `tasks` (array of 5 strings), `reflection` (string prompt)
- **Module format** — Every module in `learningPaths` should have `projectTitle` and `projectDescription`
- **Branch** — Always develop on `claude/marketing-academy-website-Zwaz0`, not main
- **Git** — Claude Code must always git add, commit, and push at the end of every session without waiting to be asked
- **No content dumps in Claude Chat** — All content generation and file writing is done by Claude Code. Claude Chat produces prompts and briefs only.
