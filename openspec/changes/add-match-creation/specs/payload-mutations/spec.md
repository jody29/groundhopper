## ADDED Requirements

### Requirement: Create Match Mutation

The app SHALL send POST requests to Payload API to create new match documents.

#### Scenario: Create match API call

- **WHEN** match creation is submitted
- **THEN** POST /api/matches endpoint is called
- **AND** request body contains homeTeam, awayTeam, seasonName fields
- **AND** Content-Type header is application/json

#### Scenario: Season auto-creation

- **WHEN** match is created with seasonName
- **AND** season does not exist in CMS
- **THEN** Payload beforeChange hook creates new season
- **AND** match.season relationship is set to new season ID
- **AND** match is saved successfully

#### Scenario: Season linking

- **WHEN** match is created with seasonName
- **AND** season already exists in CMS
- **THEN** Payload beforeChange hook finds existing season
- **AND** match.season relationship is set to existing season ID
- **AND** no duplicate season is created

#### Scenario: Success response handling

- **WHEN** API returns 201 status
- **THEN** mutation is marked as successful
- **AND** response contains created match document
- **AND** document includes generated ID

#### Scenario: Error response handling

- **WHEN** API returns error status
- **THEN** mutation is marked as failed
- **AND** error message is extracted from response
- **AND** error is propagated to UI

### Requirement: Query Cache Invalidation

Creating a match SHALL invalidate relevant query caches to keep UI in sync.

#### Scenario: Invalidate seasons list

- **WHEN** match is created successfully
- **AND** new season was created
- **THEN** seasons query cache is invalidated
- **AND** seasons list refetches automatically

#### Scenario: Invalidate matches list

- **WHEN** match is created successfully
- **THEN** matches query cache for affected season is invalidated
- **AND** season detail screen refetches matches
