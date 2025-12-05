# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Groundhopper is a football match tracking application built with:
- **Monorepo**: Turborepo for managing multiple packages and apps
- **Backend**: Payload CMS (v3.62.0) with SQLite (local) or Turso (production)
- **Web**: Next.js 16 with Payload admin interface
- **Mobile**: Expo/React Native with Expo Router
- **Shared**: @gh/payload package containing Payload CMS config and API types

## Architecture

### Monorepo Structure

```
groundhopper/
├── apps/
│   ├── web/           # Next.js CMS admin interface
│   └── native/        # Expo/React Native mobile app
├── packages/
│   └── payload/       # Shared Payload CMS configuration
└── turbo.json         # Turborepo config
```

### Core Collections (Payload CMS)

The system manages three main collections defined in `packages/payload/src/collections/`:

1. **Users** (`Users/index.ts`): Auth-enabled collection with extensible fields
2. **Seasons** (`Seasons/index.ts`): Named seasons, used by matches. Has read access for public API
3. **Matches** (`Matches/index.ts`): Football matches with home/away teams and season relationships
   - Contains a `beforeChange` hook that auto-creates seasons from `seasonName` field
   - Seasons are queryable by name and auto-linked to matches

### Data Flow

1. **Payload API** → Next.js routes (`apps/web/src/app/(payload)/api/`)
2. Routes expose Payload collections via REST API (e.g., `/api/seasons`, `/api/matches`)
3. **Native App** fetches via `@gh/native/src/lib/api/client.ts`
   - Uses TanStack React Query for caching with 5-minute stale time, 10-minute GC
   - API URL configurable via `expo-constants` from app.json extra config

### Database

- Uses `@payloadcms/db-sqlite` adapter (configured in `packages/payload/src/database/client.ts`)
- Local development: SQLite file at `./packages/payload/src/database/payload.db`
- Production: Turso database via `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN`
- Migrations live in `packages/payload/src/database/migrations/`

## Common Commands

### Development

```sh
pnpm install              # Install dependencies
cp .env.example .env      # Setup environment
pnpm dev                  # Run all dev servers (web + native + payload)
pnpm cms                  # Run only Next.js CMS at :3000
pnpm app                  # Run only Expo native app
```

### Building & Linting

```sh
turbo build                        # Build all apps
turbo build --filter=web          # Build specific app
pnpm lint                          # Lint all packages
pnpm lint:fix                      # Fix linting issues
pnpm format:fix                    # Format code with Prettier
pnpm types                         # Check TypeScript types
```

### Database

```sh
pnpm db:nuke              # Delete local SQLite database (reset)
pnpm payload migrate      # Run Payload migrations
pnpm payload                       # Access Payload CLI
```

### Payload CMS

To interact with Payload CLI from the payload package:
```sh
cd packages/payload
pnpm payload [command]    # Run Payload commands
```

### Native App Specific

```sh
cd apps/native
pnpm prebuild             # Generate native iOS/Android projects
pnpm ios                  # Build and run on iOS simulator
pnpm android              # Build and run on Android emulator
pnpm app:ios              # Run on iOS with dev client
pnpm app:android          # Run on Android with dev client
```

## Environment Configuration

Create `.env` with:

```env
# Required
PAYLOAD_SECRET=<random-string>      # Payload CMS secret

# Database (local dev uses SQLite)
TURSO_DATABASE_URL=file:./packages/payload/src/database/payload.db
TURSO_AUTH_TOKEN=                   # Empty for local

# API URL
PAYLOAD_URL=http://localhost:3000
```

## Key Tech Stack Details

### Dependencies

- **Framework**: React 19.2.0, Next.js 16, Expo 54, Payload 3.62.0
- **Data Fetching**: TanStack React Query for client caching
- **Mobile**: Expo Router for navigation, NativeWind for styling
- **DB ORM**: Drizzle (via Payload)
- **Validation**: Zod for environment variables
- **Type Safety**: TypeScript with 2Digits configs

### Version Constraints

- Node.js 22.21.1
- pnpm 10.20.0
- Payload CMS v3.62.0 (uses REST API by default, GraphQL disabled)
- **Tailwind CSS v3.x** (NativeWind v4 does not support Tailwind v4)

## Development Workflows

### Adding a Collection to Payload

1. Create collection file in `packages/payload/src/collections/YourCollection/index.ts`
2. Export as `CollectionConfig` from Payload
3. Register in `packages/payload/src/payload.config.ts` in collections array
4. Collection API endpoint will be auto-available at `/api/your-collection`

### Consuming Payload API in Native App

1. Create fetch function in `apps/native/src/lib/api/client.ts`
2. Create hook in `apps/native/src/hooks/queries/` using `useQuery`
3. API responses follow Payload's paginated format (`APIResponse<T>`)
4. Configure API URL in `app.json` (Expo config) or use `PAYLOAD_URL` env var

### Running Tests

Currently, the monorepo has linting and type checking set up but no dedicated test framework configured. Any tests should be added to individual packages with appropriate test runners (Jest, Vitest, etc.).

## Important Notes

- **Turbo Tasks**: Check `turbo.json` for task configuration. Dev tasks are persistent and non-cached
- **Payload Import Map**: Auto-generated at build time (`packages/payload/dist/import-map.ts`)
- **Type Generation**: Payload types auto-generated to `packages/payload/src/payload-types.ts`
- **Linting**: Uses 2Digits ESLint config; max 0 warnings enforced
- **Prettier**: Uses 2Digits Prettier config, configured via catalog
- **React Compiler**: Enabled as babel plugin for performance optimization

## Git & Commits

- Uses conventional commit style (check recent commits in repo)
- All packages are TypeScript
- Watch for dependency issues across monorepo via `preferWorkspacePackages: true` in pnpm config
