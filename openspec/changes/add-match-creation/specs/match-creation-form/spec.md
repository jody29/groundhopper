## ADDED Requirements

### Requirement: Match Creation Form

The app SHALL provide a form for creating new matches with homeTeam, awayTeam, and seasonName fields.

#### Scenario: Display form fields

- **WHEN** user navigates to match creation screen
- **THEN** form displays three text input fields
- **AND** fields are labeled: "Home Team", "Away Team", "Season"
- **AND** submit button is displayed at bottom

#### Scenario: Enter match data

- **WHEN** user types in homeTeam field
- **THEN** input value updates in form state
- **AND** same behavior for awayTeam field
- **AND** same behavior for seasonName field

#### Scenario: Submit form

- **WHEN** user taps submit button
- **AND** all fields are valid
- **THEN** form data is sent to Payload API
- **AND** submit button shows loading state
- **AND** form inputs are disabled during submission

#### Scenario: Successful submission

- **WHEN** match creation succeeds
- **THEN** success message is displayed
- **AND** user is navigated back to seasons list
- **AND** new match appears in appropriate season
- **AND** form is cleared

#### Scenario: Failed submission

- **WHEN** match creation fails
- **THEN** error message is displayed
- **AND** user remains on form
- **AND** can edit and retry submission

### Requirement: Navigation to Form

The app SHALL provide easy access to match creation form from main screens.

#### Scenario: Add match button on seasons list

- **WHEN** user is viewing seasons list
- **THEN** "Add Match" button is visible
- **AND** tapping button navigates to creation form

#### Scenario: Cancel form

- **WHEN** user is on creation form
- **AND** taps cancel button or back button
- **THEN** prompted to confirm if form has unsaved changes
- **AND** returns to previous screen if confirmed
