## Why

Currently, the system is hardcoded to use `http://localhost:3000` for API requests, which only works for local development. To support remote access via Tailscale (e.g., `https://jodys-macbook-pro.snowshoe-grue.ts.net`), we need:

1. **Native app**: Must accept a configurable `PAYLOAD_URL` environment variable
2. **Payload backend**: Must properly handle CORS for Tailscale URLs and set serverURL correctly
3. **Web admin**: Must be accessible and functional over the Tailscale URL with proper authentication

This enables seamless development and single-user access from any device on the Tailscale network.

## What Changes

- Update native app configuration to read `PAYLOAD_URL` environment variable at build/runtime
- Fix Payload serverURL detection to use Tailscale URLs in development
- Add CORS configuration for Tailscale domain
- Ensure Payload admin authentication works over Tailscale connection
- Document the setup steps for using Tailscale URLs

## Impact

- Affected specs: `api-configuration` (new)
- Affected code:
  - `apps/native/app.config.ts` - Environment variable handling
  - `packages/payload/src/payload.config.ts` - Server URL and CORS configuration
  - Environment setup documentation
- **Breaking**: None; this is purely additive configuration
