import { createEnv } from '@t3-oss/env-core';
import { vercel } from '@t3-oss/env-core/presets-zod';
import { withHttps } from 'ufo';
import * as z from 'zod/v4';

export const env = createEnv({
  server: {
    PAYLOAD_SECRET: z.string().min(1),
    TURSO_DATABASE_URL: z.string().min(1),
    TURSO_AUTH_TOKEN: z.string().min(1),

    PAYLOAD_URL: z.string().overwrite(withHttps).pipe(z.url()).optional()
  },
  runtimeEnvStrict: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN,
    TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL,

    PAYLOAD_URL: process.env.PAYLOAD_URL ?? process.env.VERCEL_URL,
  },
  extends: [vercel()],
});
