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
  serverExternalPackages: [
    '@esbuild/darwin-arm64',
    '@esbuild/darwin-x64',
    '@esbuild/linux-arm64',
    '@esbuild/linux-x64',
    '@esbuild/win32-arm64',
    '@esbuild/win32-x64',
    'esbuild',
    'sharp',
  ],
};

config = withPayload(config, { devBundleServerPackages: false });

export default function nextConfig() {
  return config;
}
