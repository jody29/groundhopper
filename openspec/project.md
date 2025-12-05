# Project Context

## Purpose

Groundhopper is a platform that will be used by only one user (me) and is to keep track of the football matches that I go trough.

## Tech Stack

### Core Technologies

- **TypeScript**: Primary programming language across all applications
- **React 19**: UI framework for web and native applications
- **Next.js**: Full-stack web framework with App Router
- **Expo/React Native**: Cross-platform mobile development
- **Payload CMS**: Headless CMS for content management
- **Turborepo**: Monorepo build system and task orchestration
- **pnpm**: Package manager with workspace support

### Key Libraries & Frameworks

- **TanStack Query**: Data fetching and caching
- **Tailwind CSS**: Utility-first CSS framework
- **Zod**: Runtime type validation and schema definition
- **React Hook Form + TanStack Form**: Form state management

### Infrastructure & Services

- **Vercel**: Web application hosting and deployment
- **EAS Build**: React Native build service
- **Turso**: SQLite database with edge replication

## Project Conventions

### Code Style

- **ESLint**: Uses `@2digits/eslint-config` with strict rules (max-warnings: 0)
- **Prettier**: Uses `@2digits/prettier-config` for consistent formatting
- **TypeScript**: Strict mode enabled, no implicit any types
- **Imports**: Absolute imports with `@/` prefix for workspace packages
- **File Naming**: kebab-case for files, PascalCase for components
- **No Comments**: Code should be self-documenting, no explanatory comments

### Architecture Patterns

- **Monorepo Structure**: Apps in `/apps`, shared packages in `/packages`
- **Package Boundaries**: Libraries cannot depend on apps (enforced by Turbo)
- **Feature Packages**: Domain-specific logic encapsulated in packages
- **Environment Variables**: Centralized env management with `@t3-oss/env-nextjs` and `@t3-oss/env-core`

## Important Constraints

### Technical Constraints

- **Node.js 22.21.1**: Fixed version across all environments
- **React 19**: Latest React version with concurrent features
- **Expo SDK**: Must maintain compatibility with EAS Build
- **Type Safety**: All APIs must be type-safe

### Performance Constraints

- **Mobile First**: Native app performance critical for user experience

### Git Workflow

- **Branching**: Feature branches from main, squash merges
- **Commit Messages**: Conventional commits (not strictly enforced)
- **OpenSpec**: Change proposals required for new features, breaking changes, or architecture shifts

## Domain Context

### Core Entities

- **Matches**: Football matches that I have been to
- **Seasons**: Contains Matches and could be like 2023-2024
