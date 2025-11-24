import { existsSync, readFileSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createJiti } from 'jiti';
import { generateImportMap } from 'payload';
import { generateTypes } from 'payload/node';
import { defineConfig } from 'tsdown';

// Load environment variables from .env.local file
function loadEnvFile() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const envPath = path.resolve(__dirname, '../../apps/web/.env.local');

  if (existsSync(envPath)) {
    const envContent = readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');

    for (const line of lines) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith('#')) {
        continue;
      }

      const match = trimmed.match(/^([^=]+)=(.*)$/);

      if (match) {
        const [, key, value] = match;
        // Remove quotes if present
        const cleanValue = value?.replaceAll(/^["']|["']$/g, '');

        if (key && !process.env[key]) {
          process.env[key] = cleanValue;
        }
      }
    }
  }
}

export default defineConfig({
  entry: ['./src/index.ts', './src/env.ts'],

  fixedExtension: true,
  shims: true,
  clean: false,
  ignoreWatch: ['.turbo', 'tsconfig.tsbuildinfo', './src/payload-types.ts', './src/payload-generated-schema.ts'],
  skipNodeModulesBundle: true,
  async onSuccess(cfg, signal) {
    // Load environment variables before getting config
    loadEnvFile();

    cfg.logger.info('Generating import map...');

    const config = await getConfig();

    if (!existsSync(config.admin.importMap.importMapFile)) {
      await mkdir(path.dirname(config.admin.importMap.importMapFile), {
        recursive: true,
      });
      await writeFile(config.admin.importMap.importMapFile, '', { signal });
    }

    await generateImportMap(config, { log: false, force: true });

    cfg.logger.info('Import map generated');

    cfg.logger.info('Generating types...');

    await generateTypes(config, { log: false });

    cfg.logger.info('Types generated');

    if (cfg.watch !== true) {
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(0);
    }
  },
});

async function getConfig() {
  const jiti = createJiti(import.meta.url, {
    moduleCache: false,
    debug: false,
  });

  const configModule = await jiti.import<{ default: typeof import('./src/payload.config').default }>(
    './src/payload.config',
  );

  return configModule.default;
}
