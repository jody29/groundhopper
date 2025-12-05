## Why

The app needs to display a list of seasons that users can navigate to see matches for each season. This provides the primary navigation structure for viewing football match history organized by season.

## What Changes

- Create seasons list screen showing all seasons from Payload CMS
- Implement navigation from season list to match details for selected season
- Add Payload API client integration in native app for fetching data
- Use TanStack Query for data fetching, caching, and state management
- Replace default Expo template screens with seasons overview functionality

## Impact

- Affected specs: `seasons-display`, `payload-api-integration`, `navigation-structure`
- Affected code:
  - `apps/native/src/app/(tabs)/index.tsx` - Replace with seasons list screen
  - `apps/native/src/app/(tabs)/_layout.tsx` - Update tab configuration
  - `packages/payload/` - Add REST API client utilities for native consumption
  - New files for API integration, TypeScript types, and query hooks
