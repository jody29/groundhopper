import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildConfig } from 'payload';
import sharp from 'sharp';

import { Matches } from './collections/Matches';
import { Seasons } from './collections/Seasons';
import { Users } from './collections/Users';
import { dbClient } from './database/client';
import { env } from './env';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  debug: env.VERCEL_ENV !== 'production',
  secret: env.PAYLOAD_SECRET,
  serverURL: process.env.PAYLOAD_URL ? env.PAYLOAD_URL : undefined,

  collections: [Users, Seasons, Matches],

  db: dbClient,

  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
      importMapFile: path.resolve(dirname, '../dist/import-map.ts'),
      autoGenerate: true,
    },
    dateFormat: "d MMMM y 'om' HH:mm",
    timezones: { defaultTimezone: '' },
  },

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    autoGenerate: true,
  },
  graphQL: { disable: true },
  cors: '*',
  sharp,
});
