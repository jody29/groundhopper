## ADDED Requirements

### Requirement: Custom Header Component

The system SHALL provide a reusable Header component for navigation screens with support for subtitle, title, decorative dash, and optional action button.

#### Scenario: Display header with subtitle and title

- **WHEN** the Header component is rendered with subtitle and title props
- **THEN** the subtitle SHALL be displayed in uppercase above the title
- **AND** the subtitle SHALL use a darker color than white
- **AND** the title SHALL be displayed in white (#FFFFFF)
- **AND** a decorative dash (10px width, 2px height) SHALL appear below the title
- **AND** the background color SHALL be #B91C1C (red)

#### Scenario: Display header with subtitle icon

- **WHEN** the Header component is rendered with subtitle and subtitleIcon props
- **THEN** the icon SHALL be displayed to the left of the subtitle text
- **AND** both SHALL be aligned horizontally

#### Scenario: Display header with optional action button

- **WHEN** the Header component receives children (button/action component)
- **THEN** the children SHALL be rendered on the right side of the header
- **AND** the title and subtitle SHALL remain left-aligned

#### Scenario: Use header in navigation screens

- **WHEN** a tab screen configures the `header` option with the custom Header component
- **THEN** the header SHALL replace the default navigation header
- **AND** the header SHALL render with the configured title and subtitle

### Requirement: Layout Component Organization

The system SHALL organize layout-related components in a dedicated `components/layout/` directory to maintain clear separation of concerns.

#### Scenario: Create layout directory

- **WHEN** layout components are added to the codebase
- **THEN** they SHALL be placed in `src/components/layout/`
- **AND** the Header component SHALL be exported from `header.tsx`

### Requirement: Typography and Spacing

The Header component SHALL implement proper typography hierarchy and spacing for visual clarity.

#### Scenario: Subtitle styling

- **WHEN** the subtitle is rendered
- **THEN** it SHALL use uppercase text transform
- **AND** it SHALL be smaller in font size than the title
- **AND** it SHALL have appropriate spacing below it

#### Scenario: Title styling

- **WHEN** the title is rendered
- **THEN** it SHALL use white color (#FFFFFF)
- **AND** it SHALL have a larger font size than the subtitle
- **AND** it SHALL have a decorative dash below it (10px × 2px)

### Requirement: Component Flexibility

The Header component SHALL support optional elements to allow different header configurations per screen.

#### Scenario: Optional elements

- **WHEN** the Header is used without icon, button, or subtitle
- **THEN** the component SHALL render correctly with only the provided props
- **AND** no errors or layout issues SHALL occur
