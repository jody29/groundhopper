## Why

The monorepo requires proper configuration to run both the Expo native app and Next.js CMS concurrently with `pnpm dev`. Currently missing Expo dev client configuration, Turborepo task orchestration, and environment setup that prevents clean iOS/Android emulator development.

## What Changes

- Configure Expo dev client with proper plugins in app.config.ts
- Set up Turborepo task dependencies to ensure payload package builds before apps start
- Add environment variable template and documentation for local development
- Ensure native app can connect to local Payload CMS running on web app
- Configure proper concurrency and persistence settings in turbo.json for dev task
- Add expo prebuild to ensure native projects are generated for emulator builds

## Impact

- Affected specs: `expo-dev-environment`, `turborepo-dev-workflow`
- Affected code:
  - `apps/native/app.config.ts` - Add expo-dev-client and expo-build-properties plugins
  - `turbo.json` - Verify dev task configuration
  - `apps/native/package.json` - Ensure dev scripts are correct
  - Root `.env.example` - Create template for required environment variables
  - `README.md` - Add development setup instructions
