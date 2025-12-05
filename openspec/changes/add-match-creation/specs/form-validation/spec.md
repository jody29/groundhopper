## ADDED Requirements

### Requirement: Required Field Validation

All form fields SHALL be validated before submission.

#### Scenario: Empty homeTeam field

- **WHEN** user submits form
- **AND** homeTeam field is empty
- **THEN** validation error is displayed below field
- **AND** error message is "Home team is required"
- **AND** form is not submitted

#### Scenario: Empty awayTeam field

- **WHEN** user submits form
- **AND** awayTeam field is empty
- **THEN** validation error is displayed below field
- **AND** error message is "Away team is required"
- **AND** form is not submitted

#### Scenario: Empty seasonName field

- **WHEN** user submits form
- **AND** seasonName field is empty
- **THEN** validation error is displayed below field
- **AND** error message is "Season is required"
- **AND** form is not submitted

#### Scenario: All fields valid

- **WHEN** user submits form
- **AND** all fields have values
- **THEN** no validation errors are shown
- **AND** form proceeds to submission

### Requirement: Real-time Validation Feedback

Form fields SHALL validate as user interacts with them.

#### Scenario: Validate on blur

- **WHEN** user leaves a required field
- **AND** field is empty
- **THEN** validation error appears
- **AND** field is highlighted as invalid

#### Scenario: Clear error on input

- **WHEN** validation error is displayed
- **AND** user types in the field
- **THEN** error message is cleared
- **AND** field highlighting is removed

#### Scenario: Submit button disabled

- **WHEN** form has validation errors
- **THEN** submit button is disabled
- **AND** button appears visually disabled
