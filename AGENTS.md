# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project overview
- Minimal Astro 5.x starter (see `astro` dependency in `package.json`).
- Single-page site using file-based routing via `src/pages/index.astro`.
- Static assets under `public/` (currently favicons).

## Common commands

Run these from the repository root:

- Install dependencies: `npm install`
- Start dev server: `npm run dev` (serves on `http://localhost:4321` by default)
- Build for production: `npm run build` (outputs to `dist/`)
- Preview a production build: `npm run preview`
- Run Astro CLI subcommands: `npm run astro -- <subcommand>`, e.g. `npm run astro -- check`

There are currently no lint or test scripts defined in `package.json`, so there is no standard command for running a single test yet.

## Architecture and structure

- `astro.config.mjs` – Root Astro configuration via `defineConfig({ ... })`. Extend this when adding integrations, adapters, aliases, or other global settings.
- `src/pages/` – Route-level `.astro` pages. Each file becomes a route; `index.astro` maps to the `/` route.
  - Use the frontmatter script block for data loading/logic and the markup section for templating.
- `public/` – Static, unprocessed assets served at the site root (e.g. `public/favicon.ico` → `/favicon.ico`).
- `tsconfig.json` – Extends `astro/tsconfigs/strict`. Controls TypeScript/JS tooling behavior across the project.

## Agent-specific notes

- When adding routes, prefer new `.astro` files in `src/pages/` rather than custom routing code.
- When introducing components or frameworks (React/Vue/Svelte/etc.), place reusable pieces under `src/components/` and import them into `src/pages/*`.
- If you add testing or linting tooling, also update this `AGENTS.md` with the new commands (e.g. `npm test`, `npm run lint`) so future agents can use them.
