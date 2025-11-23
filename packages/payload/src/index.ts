import { getPayload as _getPayload, type Payload } from 'payload';

import config from './payload.config';

export async function getPayload(): Promise<Payload> {
  return await _getPayload({ config });
}

export { default as config } from './payload.config';

export * from 'payload';
