# Urban Sketchers Tunja

Web platform for the Urban Sketchers Tunja community — documenting the city line by line.

## Monorepo Structure

```
├── apps/
│   ├── web/     # Next.js (App Router) + Tailwind CSS frontend
│   └── cms/     # Payload CMS v3 (PostgreSQL) - barebones setup
├── interfaces/  # Original static HTML/Tailwind templates
├── DESIGN.md    # Design system reference
└── turbo.json   # Turborepo config
```

## Tech Stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **CMS**: Payload CMS v3 with PostgreSQL adapter
- **Fonts**: Space Grotesk (headings), Inter (body), Courier Prime (mono/labels)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the web app in dev mode
pnpm --filter @usk-tunja/web dev

# Build
pnpm build
```

## Pages

| Route          | Description                      |
| -------------- | -------------------------------- |
| `/`            | Home — hero, next event, gallery |
| `/bocetos`     | Sketch archive (masonry grid)    |
| `/encuentros`  | Meeting log & upcoming events    |
| `/manifiesto`  | The USK 8 rules & chapter info   |
| `/mapa`        | Interactive map of sketch spots  |
| `/comunidad`   | Author index                     |

## CMS Setup

The CMS app (`apps/cms`) is a barebones Payload CMS v3 setup. To run it:

1. Copy `apps/cms/.env.example` to `apps/cms/.env`
2. Set your `DATABASE_URL` (PostgreSQL connection string)
3. Set a `PAYLOAD_SECRET`
4. Run `pnpm --filter @usk-tunja/cms dev`
