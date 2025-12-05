## ADDED Requirements

### Requirement: Tab Navigation Structure

The app SHALL use tab-based navigation with Seasons as the primary tab.

#### Scenario: Tab configuration

- **WHEN** app loads
- **THEN** bottom tab navigator is displayed
- **AND** "Seasons" tab is the first tab
- **AND** "Explore" tab is the second tab

#### Scenario: Default active tab

- **WHEN** app launches
- **THEN** Seasons tab is active by default
- **AND** seasons list screen is displayed

#### Scenario: Tab icons

- **WHEN** tabs are rendered
- **THEN** each tab displays appropriate icon
- **AND** active tab icon is highlighted
- **AND** inactive tab icons are dimmed

### Requirement: Stack Navigation for Season Detail

The app SHALL provide stack-based navigation from seasons list to season detail.

#### Scenario: Navigate to detail

- **WHEN** user taps season in list
- **THEN** stack navigation pushes season detail screen
- **AND** back button appears in header
- **AND** season name displays in header title

#### Scenario: Deep linking support

- **WHEN** app receives deep link to season detail
- **THEN** navigates directly to season detail screen
- **AND** back button navigates to seasons list

#### Scenario: Navigation state preservation

- **WHEN** user navigates away from seasons tab
- **AND** returns to seasons tab
- **THEN** navigation state is preserved
- **AND** user is on the same screen they left
