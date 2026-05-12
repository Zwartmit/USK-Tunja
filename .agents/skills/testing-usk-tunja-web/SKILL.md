---
name: testing-usk-tunja-web
description: Test the USK-Tunja Next.js web frontend end-to-end. Use when verifying UI changes, page rendering, or navigation.
---

# Testing USK-Tunja Web Frontend

## Prerequisites

- Node.js and pnpm installed
- The monorepo is at the repo root with `pnpm-workspace.yaml`

## Setup

1. Install dependencies from the repo root:
   ```bash
   pnpm install
   ```

2. Verify the build passes:
   ```bash
   cd apps/web && pnpm run build
   ```
   All 6 pages should be generated: `/`, `/bocetos`, `/comunidad`, `/encuentros`, `/manifiesto`, `/mapa`.

3. Start the dev server:
   ```bash
   cd apps/web && pnpm run dev
   ```
   Runs on `http://localhost:3000` by default. If port 3000 is occupied, kill the existing process with `fuser -k 3000/tcp` first.

## Pages to Test

| Route          | Source HTML    | Key Sections                                      |
|----------------|---------------|---------------------------------------------------|
| `/`            | home.html     | Nav bar, hero with sketch image, Convocatoria #42, Archivo Reciente grid, Footer |
| `/encuentros`  | encuentros.html | Próxima Convocatoria card, El Registro table, photo strip |
| `/bocetos`     | bocetos.html  | Gallery grid with technique filter tabs, search input |
| `/manifiesto`  | manifiesto.html | Hero text + photo, Las 8 Reglas grid, El Capítulo Tunja, CTA |
| `/comunidad`   | autores.html  | Author index with search, author cards with photos |
| `/mapa`        | mapa.html     | Sidebar with location list, map area with markers + popup card |

## What to Check

- **Navigation:** All nav links (ENCUENTROS, BOCETOS, MANIFIESTO, COMUNIDAD) and the USK TUNJA logo link work correctly.
- **Images:** Most images are external Google URLs (`lh3.googleusercontent.com/aida-public/...`). Some of these URLs may expire and return HTTP 400 — this is a data issue, not a code bug. Check with `curl -sI <url>` if an image appears broken.
- **Footer:** Should appear on every page with INSTAGRAM, CONTACTO, RECURSOS, LEGAL links.
- **Console errors:** Open browser devtools console. Expect only LCP priority warnings and sticky nav auto-scroll warnings — no JS errors.
- **Fonts:** Inter (body), Space Grotesk (headings), Courier Prime (mono) should be loaded via `next/font/google`.

## Notes

- The `mapa` page is not linked in the main nav bar — navigate directly via URL.
- The default branch is `temp-init`, not `main`.
- The monorepo uses Turborepo with pnpm workspaces.
- There is also an `apps/cms` (Payload CMS v3) but it requires a PostgreSQL database to run. The web frontend can be tested independently.
