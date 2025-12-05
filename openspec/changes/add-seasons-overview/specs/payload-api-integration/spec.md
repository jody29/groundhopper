## ADDED Requirements

### Requirement: Payload REST API Client

The native app SHALL communicate with Payload CMS via REST API endpoints.

#### Scenario: API client configuration

- **WHEN** app initializes
- **THEN** API client is configured with base URL
- **AND** base URL uses PAYLOAD_URL environment variable
- **AND** defaults to localhost:3000 in development

#### Scenario: Fetch seasons

- **WHEN** seasons are requested
- **THEN** GET /api/seasons endpoint is called
- **AND** returns array of season documents
- **AND** response includes id and name fields

#### Scenario: Fetch matches by season

- **WHEN** matches for specific season are requested
- **THEN** GET /api/matches?where[season][equals]={seasonId} endpoint is called
- **AND** returns array of match documents
- **AND** response includes homeTeam, awayTeam, season fields

#### Scenario: TypeScript type safety

- **WHEN** API responses are received
- **THEN** responses match Payload-generated TypeScript types
- **AND** type errors are caught at compile time

### Requirement: Data Caching and State Management

The app SHALL use TanStack Query for API data fetching and caching.

#### Scenario: Query client setup

- **WHEN** app initializes
- **THEN** QueryClientProvider wraps the app
- **AND** default cache time is configured
- **AND** stale time is configured

#### Scenario: Cache seasons data

- **WHEN** seasons are fetched successfully
- **THEN** data is cached in TanStack Query
- **AND** subsequent requests use cached data
- **AND** cache is refreshed based on stale time

#### Scenario: Optimistic UI updates

- **WHEN** data is refetching in background
- **THEN** cached data is displayed immediately
- **AND** UI updates when fresh data arrives

#### Scenario: Offline behavior

- **WHEN** network is unavailable
- **AND** cached data exists
- **THEN** cached data is displayed
- **AND** user is informed of offline state
