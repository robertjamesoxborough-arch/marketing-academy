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
| **Lesson View** | Full lesson with sidebar nav, content, inline quiz, mark complete, XP award |
| **Resource Library** | 21 curated external resources with filters and descriptions |
| **My Progress** | XP total, lessons completed, quizzes passed, streak tracker, per-path progress bars, activity feed |

### Learning Paths (all 102 lessons fully written)

| Path | Modules | Lessons |
|------|---------|---------|
| SEO | 5 | 18 |
| Paid Search | 3 | 16 |
| Social Media Advertising | 4 | 18 |
| Content & Inbound Marketing | 4 | 22 |
| Data & Analytics | 3 | 15 |
| Growth & Experimentation | 4 | 13 |

Every lesson has: original written content (~400-600 words), callout boxes (Key Concept / Pro Tip / Common Mistake), and a 4-option multiple choice quiz with explanation.

### Technical Features Working

- XP system — earn XP for completing lessons and quizzes
- Streak tracking — daily visit streak (Duolingo style)
- LocalStorage — all progress saves in the browser (no backend)
- Ad slots — top banner, inline, and bottom placements (ready for monetisation)
- Fully responsive — mobile, tablet, desktop
- Placement quiz — assigns user a level on first visit

---

## File Structure

```
marketing-academy/
├── index.html          — All HTML, all page views, all ad slots
├── style.css           — All styling, responsive breakpoints
├── app.js              — All JavaScript: navigation, data, lesson content (first 11 lessons), quiz logic, progress tracking
├── content-expanded.js — All remaining 91 lessons (loaded after app.js, uses Object.assign to extend lessonContent)
└── CLAUDE.md           — This file
```

### Key Data Structures in app.js

- `learningPaths` — Defines all 6 paths, their modules, and lesson metadata (id, title, duration, xp)
- `lessonContent` — Object keyed by lesson ID containing title, HTML body, and quiz for the first 11 lessons
- `placementQuestions` — The 8 questions for the start-here quiz
- `resources` — The 21 curated resources for the library

`content-expanded.js` extends `lessonContent` with all remaining 91 lessons using `Object.assign(lessonContent, {...})`.

---

## What Is NOT Built Yet (Audit / Suggested Next Steps)

### High Priority — Core Product Gaps

1. **Search** — No way to search lessons or resources. Users can't find content quickly once the site grows.
2. **Lesson notes** — No way for users to take or save notes on lessons.
3. **Bookmarks / Save for later** — Users can't bookmark lessons to return to.
4. **Certificate/completion badge** — No reward when a user finishes a full learning path. High motivation value.
5. **Mobile nav** — The sidebar may need improvement on small screens.

### Medium Priority — Engagement & Retention

6. **Email capture** — No way to collect emails from users (for a newsletter or to notify of new content).
7. **Recommended next lesson** — After completing a lesson, the "next" step isn't clearly surfaced.
8. **Difficulty filter on paths** — No way to filter lessons by the user's assigned level from the placement quiz.
9. **Glossary** — Marketing terms used in lessons aren't defined in a searchable reference.
10. **Related resources** — Lessons don't link to the Resource Library items that are relevant to that topic.

### Lower Priority — Nice to Have

11. **Dark mode** — No theme toggle.
12. **Print / export lesson** — Users can't save a lesson as PDF for offline reading.
13. **Social sharing** — No way to share a lesson or completion milestone.
14. **Progress reset** — No way for users to reset their progress if they want to start over.
15. **Analytics integration** — No GA4 or equivalent to understand which lessons are most popular.

---

## How to Make Changes

### Via Claude Code (building)
Claude Code can read this file, edit `index.html`, `style.css`, `app.js`, and `content-expanded.js` directly, then commit and push to the `claude/marketing-academy-website-Zwaz0` branch.

### Via Claude Chat (planning)
Claude Chat can audit the above, suggest prioritisation, write detailed specs for features, or draft new lesson content to paste into `content-expanded.js`.

### Deployment
Push to `main` branch → Vercel auto-deploys within ~30 seconds.

---

## Conventions

- **No frameworks** — Pure vanilla JS, HTML, CSS only. Do not introduce React, Vue, bundlers, or npm.
- **No backend** — Everything must work as a static file. Use LocalStorage for persistence.
- **British English** — All content uses British English spelling (optimisation, colour, etc.)
- **Lesson format** — Every lesson must have: `title`, `body` (HTML string with h2 sections and callout boxes), and `quiz` (question, 4 options array, correct index, explanation string)
- **Branch** — Always develop on `claude/marketing-academy-website-Zwaz0`, not main
