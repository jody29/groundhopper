## ADDED Requirements

### Requirement: Expo Dev Client Configuration

The native app SHALL be configured with Expo dev client to enable development builds on iOS and Android emulators.

#### Scenario: Dev client plugin configured

- **WHEN** app.config.ts is loaded
- **THEN** expo-dev-client plugin is included in plugins array
- **AND** expo-build-properties plugin configures newArchEnabled

#### Scenario: Native projects generated

- **WHEN** expo prebuild is executed
- **THEN** ios/ and android/ directories are generated
- **AND** native projects contain dev client configuration

#### Scenario: iOS simulator launch

- **WHEN** `pnpm app` is executed
- **AND** iOS simulator is available
- **THEN** Expo dev client opens in iOS simulator
- **AND** Metro bundler starts serving the app

#### Scenario: Android emulator launch

- **WHEN** `pnpm app` is executed
- **AND** Android emulator is available
- **THEN** Expo dev client opens in Android emulator
- **AND** Metro bundler starts serving the app

### Requirement: Development Environment Variables

The project SHALL provide environment variable templates and configuration for local development.

#### Scenario: Environment template exists

- **WHEN** developer clones repository
- **THEN** .env.example file exists in root directory
- **AND** contains PAYLOAD_SECRET, TURSO_DATABASE_URL, TURSO_AUTH_TOKEN, PAYLOAD_URL

#### Scenario: Local Payload connection

- **WHEN** native app runs in development mode
- **THEN** PAYLOAD_URL defaults to http://localhost:3000
- **AND** native app can connect to local CMS
