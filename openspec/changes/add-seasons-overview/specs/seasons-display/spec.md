## ADDED Requirements

### Requirement: Seasons List Display

The app SHALL display all seasons fetched from Payload CMS in a scrollable list.

#### Scenario: Display seasons list

- **WHEN** user opens the app
- **THEN** seasons tab is active
- **AND** all seasons are displayed in a list
- **AND** each item shows the season name

#### Scenario: Loading state

- **WHEN** seasons are being fetched
- **THEN** loading indicator is displayed
- **AND** user cannot interact with list

#### Scenario: Error state

- **WHEN** seasons fetch fails
- **THEN** error message is displayed
- **AND** retry button is available
- **AND** tapping retry re-fetches seasons

#### Scenario: Empty state

- **WHEN** no seasons exist in CMS
- **THEN** empty state message is displayed
- **AND** suggests adding seasons via CMS

#### Scenario: Navigate to season detail

- **WHEN** user taps on a season item
- **THEN** navigation occurs to season detail screen
- **AND** season ID is passed as route parameter

### Requirement: Season Detail Display

The app SHALL display all matches for a selected season.

#### Scenario: Display matches for season

- **WHEN** user navigates to season detail
- **THEN** matches for that season are fetched
- **AND** displayed in a list
- **AND** each match shows "homeTeam vs awayTeam" format

#### Scenario: Loading matches

- **WHEN** matches are being fetched
- **THEN** loading indicator is displayed

#### Scenario: No matches for season

- **WHEN** season has no matches
- **THEN** empty state is displayed
- **AND** message indicates no matches for this season

#### Scenario: Back navigation

- **WHEN** user taps back button
- **THEN** returns to seasons list
- **AND** list state is preserved
