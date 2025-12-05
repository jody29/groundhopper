## ADDED Requirements

### Requirement: Tailscale URL Configuration

The system SHALL accept a configurable `PAYLOAD_URL` environment variable to support remote API access via Tailscale networks. This enables development and single-user access from any device on the Tailscale network without requiring localhost port forwarding.

#### Scenario: Using Tailscale URL in development

- **WHEN** `PAYLOAD_URL` is set to a Tailscale HTTPS URL (e.g., `https://jodys-macbook-pro.snowshoe-grue.ts.net`)
- **THEN** the native app SHALL use this URL for all API requests
- **AND** the Payload backend SHALL recognize this as a remote URL and configure CORS appropriately
- **AND** the admin panel SHALL be accessible at `${PAYLOAD_URL}/admin` with proper authentication

#### Scenario: Fallback to localhost in development

- **WHEN** `PAYLOAD_URL` is not set or empty
- **THEN** the system SHALL default to `http://localhost:3000` for backwards compatibility
- **AND** development workflow remains unchanged

### Requirement: CORS for Remote URLs

The system SHALL enable CORS for Tailscale URLs to allow the native app and admin panel to make requests without browser/network restrictions.

#### Scenario: Admin panel access over Tailscale

- **WHEN** accessing `https://jodys-macbook-pro.snowshoe-grue.ts.net/admin` from a device on the Tailscale network
- **THEN** authentication requests SHALL succeed
- **AND** subsequent API calls SHALL not be blocked by CORS

### Requirement: Environment Variable Documentation

The system SHALL provide clear documentation on how to configure `PAYLOAD_URL` for different environments (local development, Tailscale, production).

#### Scenario: Developer sets up Tailscale

- **WHEN** a developer reads the setup documentation
- **THEN** they SHALL understand how to set `PAYLOAD_URL` before running the app
- **AND** they SHALL know the format required (HTTPS for Tailscale)
