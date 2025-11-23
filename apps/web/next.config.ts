import type { NextConfig } from 'next';

import { withPayload } from '@payloadcms/next/withPayload';

let config: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    typedEnv: true,
    optimizePackageImports: ['prettier'],
  },
  transpilePackages: ['@gh/payload'],
};

config = withPayload(config, { devBundleServerPackages: true });

export default function nextConfig() {
  return config;
}
