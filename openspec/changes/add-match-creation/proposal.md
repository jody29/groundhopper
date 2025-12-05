## Why

Users need the ability to add new matches directly from the native app. This enables quick entry of match data after attending a game, with proper integration to Payload CMS for data persistence.

## What Changes

- Create match creation form screen accessible from seasons or explore tab
- Implement form with fields: homeTeam, awayTeam, season (relationship), seasonName (text input)
- Use React Hook Form or TanStack Form for form state management
- Add Payload API mutation for creating matches
- Leverage existing beforeChange hook that creates/links seasons automatically
- Add success/error feedback and navigation after submission

## Impact

- Affected specs: `match-creation-form`, `payload-mutations`, `form-validation`
- Affected code:
  - New screen: `apps/native/src/app/match/new.tsx` - Match creation form
  - `packages/payload/src/collections/Matches/index.ts` - Already has required fields and hooks
  - Navigation updates to add "Add Match" button or tab
  - API client extended with POST /api/matches endpoint
