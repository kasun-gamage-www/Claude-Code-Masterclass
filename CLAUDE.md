# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run test     # Run all tests with Vitest
```

Run a single test file:
```bash
npx vitest tests/components/Navbar.test.tsx
```

## File Structure

```
app/
  layout.tsx                  # Root layout (html/body, global CSS)
  globals.css                 # Tailwind v4 @theme tokens + global utility classes
  (public)/                   # Unauthenticated route group
    layout.tsx
    page.tsx                  # Home/landing
    login/page.tsx
    signup/page.tsx
    preview/page.tsx
    calculator/page.tsx         # /calculator
  (dashboard)/                # Authenticated route group (includes Navbar)
    layout.tsx
    heists/
      page.tsx                # /heists — active, assigned, expired lists
      create/page.tsx         # /heists/create
      [id]/page.tsx           # /heists/:id — detail view
components/
  Navbar/
    Navbar.tsx
    Navbar.module.css
    index.ts                  # Barrel export
tests/
  components/
    Navbar.test.tsx
```

## Architecture

**Pocket Heist** is a Next.js 16 app (React 19, TypeScript, Tailwind CSS v4) for managing office prank "heists".

### Route Groups

The app uses two Next.js route groups with separate layouts:

- `app/(public)/` — Unauthenticated pages (home, login, signup, preview). Layout wraps children in `<main className="public">`.
- `app/(dashboard)/` — Authenticated pages with the `Navbar` component. Heist routes live here: `/heists`, `/heists/create`, `/heists/[id]`.

### Path Aliases

`@/` maps to the project root (defined in `tsconfig.json`). Use `@/components/...`, `@/app/...`, etc.

### Components

Components live in `components/` with a folder-per-component structure: the component file, a CSS module, and an `index.ts` barrel export. Example: `components/Navbar/Navbar.tsx` exported via `components/Navbar/index.ts`.

### Styling

Tailwind CSS v4 is configured via `globals.css` using `@theme` for design tokens. Custom utility classes (`.page-content`, `.center-content`, `.form-title`) are defined there. Component-specific styles use CSS Modules (`.module.css`).

### Testing

Tests use Vitest + React Testing Library with jsdom. Test files live in `tests/` mirroring the source structure (e.g., `tests/components/`). Setup file is `vitest.setup.ts`.
