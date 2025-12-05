## ADDED Requirements

### Requirement: Concurrent Development Servers

The monorepo SHALL run both web CMS and native app development servers concurrently with a single command.

#### Scenario: Run all dev servers

- **WHEN** `pnpm dev` is executed from root
- **THEN** web app dev server starts on port 3000
- **AND** native app Metro bundler starts
- **AND** payload package builds in watch mode
- **AND** all processes run concurrently

#### Scenario: Run CMS only

- **WHEN** `pnpm cms` is executed
- **THEN** only web app dev server starts
- **AND** payload package builds first

#### Scenario: Run native app only

- **WHEN** `pnpm app` is executed
- **THEN** only native app Metro bundler starts
- **AND** payload package builds first

### Requirement: Build Dependencies

Development servers SHALL wait for payload package to build before starting.

#### Scenario: Payload builds before web

- **WHEN** web dev server starts
- **THEN** payload package build completes first
- **AND** web app can import from @gh/payload

#### Scenario: Payload builds before native

- **WHEN** native Metro bundler starts
- **THEN** payload package build completes first
- **AND** native app can import from @gh/payload

### Requirement: Task Configuration Standards

Turborepo dev tasks SHALL follow standard configuration for persistent, interactive processes.

#### Scenario: Dev task properties

- **WHEN** turbo.json dev task is evaluated
- **THEN** cache is set to false
- **AND** persistent is set to true
- **AND** interactive is set to true
