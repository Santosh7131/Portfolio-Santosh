# Portfolio Copilot Instructions

## Project Overview
This is a modern, single-page portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Framer Motion**. The architecture uses a **client-side router pattern** without React Router, implementing custom page transitions with Framer Motion.

## Architecture & Design Patterns

### Custom Navigation System
- **No React Router**: Pages are managed via state in `App.tsx` using object mapping (`pages` object maps page keys to components)
- **Page transitions**: Controlled by `isTransitioning` state with coordinated navigation hide/show animations
- **Cross-component navigation**: Uses global handler pattern via `setPageChangeHandler()` in `HomePage.tsx` for programmatic navigation from any page

### Animation Strategy
- **Framer Motion everywhere**: All animations use Framer Motion, never CSS transitions
- **Sticky navigation**: Nav bar is fixed at top, slides up/down during page transitions (500ms hide → 100ms delay → 500ms show)
- **Initial load exception**: `isInitialLoad` state prevents nav animation on first mount
- **Page transitions**: Use `AnimatePresence` with `mode="wait"` for smooth page swaps
- **Consistent timing**: All transitions use custom easing `[0.22, 1, 0.36, 1]` for cohesive feel

### Component Structure
```
App.tsx          # Central state manager (currentPage, isTransitioning)
PortfolioNavbar.tsx # Aceternity UI resizable navbar with state-based navigation
pages/           # Each page is self-contained with extracted data constants
  HomePage.tsx   # Includes global page handler registration
  AboutPage.tsx  # Standard page pattern
  SkillsPage.tsx # Standard page pattern  
  ProjectsPage.tsx # Standard page pattern
components/
  ui/resizable-navbar.tsx # Aceternity UI navbar components
  animate-ui/backgrounds/stars.tsx # Animated starfield background
```

## Code Conventions

### Import Organization
```typescript
// External libraries first
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';

// Internal components
import { PortfolioNavbar } from './components/PortfolioNavbar';
import { HomePage } from './pages/HomePage';
```

### React Patterns
- **No default React import**: React 19 auto-imports JSX, avoid `import React from 'react'`
- **Named imports only**: Use `{ useState }` not `React.useState`
- **Extract constants**: All page data (stats, projects, skills) extracted outside components to prevent recreation on re-renders
- **Object mapping over switch**: Use `const pages = { home: HomePage, ... }` pattern instead of switch statements

### TypeScript Usage
- **Path aliases**: Use `@/` prefix for all src imports (configured in `tsconfig.json` and `vite.config.ts`)
- **Type safety**: All page props and nav props use explicit TypeScript interfaces
- **Union types**: Page identifiers use `'home' | 'about' | 'skills' | 'projects'` type

### Styling Approach
- **Tailwind CSS v4**: Uses `@tailwindcss/vite` plugin, not PostCSS
- **Glassmorphism**: `bg-white/5 backdrop-blur-sm border border-white/10` pattern throughout
- **Consistent spacing**: Pages use `pt-28 pb-20 px-4` (28 accounts for sticky nav)
- **Gradient text**: Use `bg-gradient-to-r from-X to-Y bg-clip-text text-transparent` for colorful headings
- **Custom CSS variables**: Minimal use in `index.css` - prefer Tailwind utilities

## Development Workflow

### Commands
```bash
npm run dev      # Start Vite dev server (default port 5173)
npm run build    # TypeScript compile + Vite production build
npm run preview  # Preview production build locally
npm run lint     # ESLint with TypeScript, React Hooks, and React Refresh rules
```

### Adding New Pages
1. Create page component in `src/pages/` with extracted data constants
2. Add page to `pages` object in `App.tsx`
3. Add to `PageType` union and `navItems` array in `PortfolioNavbar.tsx`
4. Follow animation patterns: `initial`, `animate`, `exit` with consistent timing
5. Use `pt-28` padding-top for sticky nav clearance

### Modifying Animations
- **Nav transitions**: Aceternity UI navbar manages its own animations automatically
- **Page transitions**: Adjust `AnimatePresence` motion props in `App.tsx`
- **Navbar integration**: Uses state-based navigation with `onPageChange` callback

## Key Technical Details

### Framer Motion Patterns
```typescript
// Standard page animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>

// Navigation hide/show
exit={{ y: -100, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
```

### State Management
- **No Redux/Context**: Simple React state in `App.tsx`
- **Global handlers**: Use module-level variables with setter functions (see `HomePage.tsx`) for cross-component actions
- **Transition locking**: Always check `isTransitioning` before allowing page changes

### Performance Optimizations
- **Extracted constants**: All static data outside components (see `OPTIMIZATION_SUMMARY.md`)
- **Minimal CSS**: `index.css` reduced to ~25 lines, no unused CSS variables
- **Named imports**: Tree-shaking friendly import patterns
- **No dead code**: Unused components removed (StaticNav, AnimatedNav, PageTransition, etc.)

## Common Pitfalls to Avoid

1. **Don't use React Router** - This project uses custom state-based navigation
2. **Never animate with CSS transitions** - Always use Framer Motion for consistency
3. **Don't skip `pt-28` on pages** - Sticky nav will overlap content
4. **No inline data arrays** - Extract to constants for performance
5. **Respect `isTransitioning`** - Don't allow navigation during transitions
6. **Match animation timings** - Breaking coordination causes jarring UX

## External Dependencies

- **Framer Motion**: Core animation library, complex but powerful API
- **Lucide React**: Icon library used in nav social icons
- **Tailwind Merge & CVA**: Utility helpers (minimal usage currently)
- **tw-animate-css**: Tailwind animation utilities (installed but verify usage)

## Documentation References

- `NAVIGATION_FEATURES.md` - Detailed nav animation flow and implementation
- `OPTIMIZATION_SUMMARY.md` - Performance improvements and removed files
- Package versions locked to React 19.1.1, Framer Motion 12.23.x
