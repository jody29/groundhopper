## 1. Payload Backend Configuration

- [ ] 1.1 Update `packages/payload/src/payload.config.ts` to correctly detect Tailscale URLs as remote (not localhost)
- [ ] 1.2 Verify CORS is enabled for Tailscale domain (`*` is already set, verify it works)
- [ ] 1.3 Test Payload admin access via `https://jodys-macbook-pro.snowshoe-grue.ts.net/admin`
- [ ] 1.4 Test API access via `https://jodys-macbook-pro.snowshoe-grue.ts.net/api/seasons`

## 2. Native App Configuration

- [ ] 2.1 Update `apps/native/app.config.ts` to accept `PAYLOAD_URL` from environment
- [ ] 2.2 Document how to set `PAYLOAD_URL` for local dev (`pnpm dev` or EAS build)
- [ ] 2.3 Test native app with Tailscale URL (Expo dev client)
- [ ] 2.4 Verify fetch requests work with HTTPS and Tailscale certificate

## 3. Authentication & Security

- [ ] 3.1 Verify Payload admin login persists over Tailscale connection
- [ ] 3.2 Check that cookies/auth tokens work correctly (same-site policy)
- [ ] 3.3 Test refresh behavior (if session expires during Tailscale use)

## 4. Documentation

- [ ] 4.1 Add setup instructions to README or docs for using Tailscale URL
- [ ] 4.2 Document environment variable setup for development
- [ ] 4.3 Note any certificate/HTTPS considerations for local Tailscale
