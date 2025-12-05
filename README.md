# Groundhopper

Football match tracking application built with Turborepo, Next.js, Expo, and Payload CMS.

## Getting Started

### Prerequisites

- Node.js 22.21.1
- pnpm 10.20.0
- iOS Simulator (for iOS development)
- Android Emulator (for Android development)

### Initial Setup

1. Clone the repository and install dependencies:

```sh
pnpm install
```

2. Set up environment variables:

```sh
cp .env.example .env
```

Edit `.env` and configure:

- `PAYLOAD_SECRET`: A secret key for Payload CMS (generate a random string)
- `TURSO_DATABASE_URL`: Database URL (defaults to local SQLite: `file:./packages/payload/src/database/payload.db`)
- `TURSO_AUTH_TOKEN`: Leave empty for local development
- `PAYLOAD_URL`: API URL (defaults to `http://localhost:3000`)

#### Using Tailscale for Remote Access

To access the CMS and API via Tailscale (e.g., from mobile devices on your Tailscale network):

1. Set `PAYLOAD_URL` to your Tailscale machine URL in `.env`:

```sh
PAYLOAD_URL=https://your-machine-name.your-tailnet.ts.net
```

2. For the native app, set the public environment variable before building or running:

```sh
EXPO_PUBLIC_PAYLOAD_URL=https://your-machine-name.your-tailnet.ts.net pnpm app
```

Or add to your `.env`:

```sh
EXPO_PUBLIC_PAYLOAD_URL=https://your-machine-name.your-tailnet.ts.net
```

3. The web CMS will also be accessible at `${PAYLOAD_URL}/admin` with Tailscale authentication.

Note: Ensure your Tailscale network is properly configured and the local machine is running the development server.

3. Generate native projects for Expo:

```sh
cd apps/native
pnpm prebuild
```

### Development

Run all development servers concurrently:

```sh
pnpm dev
```

This starts:

- Web CMS at http://localhost:3000
- Expo Metro bundler for native app
- Payload package in watch mode

Run only the CMS:

```sh
pnpm cms
```

Run only the native app:

```sh
pnpm app
```

### Apps and Packages

- `apps/web`: Next.js app with Payload CMS admin interface
- `apps/native`: Expo/React Native mobile app
- `packages/payload`: Shared Payload CMS configuration and collections

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> **TIP**: Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```sh
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
