---
name: testing-cms-integration
description: Test the USK-Tunja frontend-CMS integration end-to-end. Use when verifying that the Next.js frontend correctly fetches and renders data from the Payload CMS backend.
---

# Testing CMS Integration

## Prerequisites

- Local PostgreSQL running with database `usk_tunja`
- Both apps installed (`pnpm install` from repo root)

## Environment Setup

1. Create `apps/cms/.env`:
   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/usk_tunja
   PAYLOAD_SECRET=usk_tunja_secret_key_2026
   ```

2. Create `apps/web/.env`:
   ```
   NEXT_PUBLIC_CMS_URL=http://localhost:3001
   ```

## Starting Servers

1. Start CMS first (port 3001): `cd apps/cms && pnpm dev`
2. Wait for CMS to be ready: `curl -s http://localhost:3001/api/sketches | python3 -c "import sys,json; print(json.load(sys.stdin)['totalDocs'])"`
3. Start Web app (port 3000): `cd apps/web && pnpm dev`
4. Wait for Web to be ready: `curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/bocetos`

## Seeding Data

If the database is empty, seed it by running the seed script or using the Payload Local API. The seed script creates:
- 1 Author (Ana Martínez, @ana.traza)
- 1 Location (Plaza de Bolívar)
- 3 Sketches (ink, watercolor, graphite techniques)
- 3 Media files (sketch1.jpg, sketch2.jpg, sketch3.jpg)

## Key Test Points

### /bocetos Page (Primary)
- Header should show `[N REGISTROS]` where N matches `totalDocs` from API
- Sketch cards should render with technique stamps translated to Spanish:
  - watercolor → ACUARELA
  - ink → TINTA CHINA
  - graphite → GRAFITO
  - digital → DIGITAL
  - mixed → MIXTA
- Hover overlays contain author handle and location name (CSS opacity transition)
- Images are proxied through Next.js Image: `/_next/image?url=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fmedia%2Ffile%2F...`
- If CMS is unreachable, shows fallback: "No hay bocetos disponibles"

### REST API Verification
- `GET http://localhost:3001/api/sketches?depth=1` should return populated relationships
- Verify `author` and `location` are objects (not IDs) when `depth=1`

### CMS Admin Panel
- Navigate to `http://localhost:3001/admin`
- Note: The admin panel might have client-side errors related to `importMap.js` or config resolution. This does NOT affect the REST API.
- If admin panel works, verify collections are listed: Authors, Events, Locations, Media, Sketches

## Known Issues

- Supabase DB hostname may only resolve to IPv6; use local PostgreSQL for dev testing
- Admin panel might show Runtime TypeError on `/admin/login` — this is a Payload v3 + Next.js App Router compatibility issue that doesn't affect API functionality
- Filter buttons and search on `/bocetos` are static UI (not yet functional)

## Devin Secrets Needed

No secrets required for local testing. For production Supabase testing:
- `DATABASE_URL` — Supabase PostgreSQL connection string
- `PAYLOAD_SECRET` — Any random string for JWT signing
