import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { sqliteAdapter } from '@payloadcms/db-sqlite';

import { env } from '../env';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const dbClient = sqliteAdapter({
  client: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  migrationDir: path.resolve(dirname, 'migrations'),
  generateSchemaOutputFile: path.resolve(dirname, '../payload-generated-schema.ts'),
  idType: 'uuid',
  allowIDOnCreate: true,
});
