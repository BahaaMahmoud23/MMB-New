# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MMB is a React-based landing page for a premium web development agency. Built with Vite + React + Tailwind CSS.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

## Architecture

- **Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`
- **Styling:** Tailwind CSS v3 (`tailwind.config.js` + `src/index.css`). Strict monochrome palette — black, white, gray only.
- **Animations:** CSS keyframes defined in `tailwind.config.js` (`fadeUp`, `fadeIn`, `slideInLeft`) triggered by a custom `useInView` hook in `src/hooks/useInView.js`. No framer-motion dependency — animations are pure CSS + IntersectionObserver.
- **Icons:** `lucide-react` throughout. No emoji icons.
- **Logo assets:** `public/images/black logo.png` and `public/images/white logo.png` — served directly from `public/` via Vite.

## Component Map (`src/components/`)

| File | Section | Notes |
|------|---------|-------|
| `Navbar.jsx` | Sticky navbar | Transparent → frosted glass on scroll; mobile drawer |
| `Hero.jsx` | Hero | Animated canvas dot grid background, two CTAs, stat row |
| `Services.jsx` | Services | 6-card grid, icon flips to white on hover |
| `Projects.jsx` | Portfolio | Filterable by category, 6 placeholder cards |
| `WhyUs.jsx` | Why MMB | Sticky left heading + scrolling right list |
| `Process.jsx` | Process | 6-step grid with step numbers and durations |
| `About.jsx` | About | Split layout — decorative card left, copy right |
| `FAQ.jsx` | FAQ | Two-column accordion, open/close per item |
| `CTA.jsx` | Contact | Dark section — copy + contact form with success state |
| `Footer.jsx` | Footer | Logo, nav links, social icons, copyright |

## Key Conventions

- `useInView` hook adds `animate-fade-up` class when an element enters the viewport; elements start `opacity-0` and animate in once.
- All animation delays are inline `style` `animationDelay` props, staggered by index × 80ms.
- Section IDs match navbar hrefs exactly: `#services`, `#projects`, `#process`, `#about`, `#faq`, `#cta`, `#hero`.
- All scroll navigation uses `element.scrollIntoView({ behavior: 'smooth' })` — no React Router.
- `prefers-reduced-motion` is respected via a global CSS rule in `src/index.css`.
