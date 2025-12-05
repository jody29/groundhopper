## 1. Payload API Client Setup

- [x] 1.1 Create API client utility for Payload REST API in packages/payload (created apps/native/src/lib/api/client.ts)
- [x] 1.2 Export TypeScript types from Payload collections for native app (created apps/native/src/lib/api/types.ts with Season and Match interfaces)
- [x] 1.3 Add TanStack Query to native app dependencies (@tanstack/react-query added)
- [x] 1.4 Create QueryClientProvider wrapper in app root layout (configured in apps/native/src/app/\_layout.tsx with 5min staleTime, 10min gcTime)
- [x] 1.5 Configure API base URL from environment variables (configured in app.config.ts extra.payloadUrl)

## 2. Seasons List Screen

- [x] 2.1 Create useSeasons query hook for fetching seasons (apps/native/src/hooks/queries/use-seasons.ts)
- [x] 2.2 Replace apps/native/src/app/(tabs)/index.tsx with seasons list
- [x] 2.3 Display season name in list items
- [x] 2.4 Add loading state with ActivityIndicator
- [x] 2.5 Add error state with retry option
- [x] 2.6 Add empty state when no seasons exist

## 3. Season Detail Screen

- [x] 3.1 Create apps/native/src/app/season/[id].tsx dynamic route
- [x] 3.2 Create useMatches query hook for fetching matches by season (apps/native/src/hooks/queries/use-matches.ts)
- [x] 3.3 Display match list with homeTeam vs awayTeam format
- [x] 3.4 Add loading and error states
- [x] 3.5 Add empty state when season has no matches

## 4. Navigation Implementation

- [x] 4.1 Update tab layout to rename "Home" to "Seasons" (updated to "Seasons" with calendar icon)
- [x] 4.2 Configure navigation from season list to detail screen (router.push to /season/[id])
- [x] 4.3 Add back navigation from detail to list (Stack.Screen configured in \_layout.tsx)
- [x] 4.4 Pass season ID through route params (using useLocalSearchParams)

## 5. Testing & Validation

- [ ] 5.1 Test seasons list loads from Payload CMS (requires manual test with dev servers)
- [ ] 5.2 Test navigation to season detail (requires manual test)
- [ ] 5.3 Test matches load for selected season (requires manual test)
- [ ] 5.4 Test offline behavior with TanStack Query cache (requires manual test)
- [x] 5.5 Verify TypeScript types are correct (✅ pnpm types passing)
- [x] 5.6 Run linter and fix any issues (✅ Fixed new file lint errors; remaining errors are in pre-existing template files: explore.tsx, external-link.tsx, haptic-tab.tsx, use-color-scheme.web.ts, tailwind.config.ts)
