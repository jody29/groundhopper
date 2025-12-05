import Constants from 'expo-constants';

interface ExpoConfigExtra {
  payloadUrl?: string;
}

const API_URL = (Constants.expoConfig?.extra as ExpoConfigExtra | undefined)?.payloadUrl || 'http://localhost:3000';

if (__DEV__) {
  console.log('[API Client] Using API_URL:', API_URL);
  console.log('[API Client] Constants.expoConfig?.extra:', Constants.expoConfig?.extra);
}

export interface APIResponse<T> {
  docs: Array<T>;
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export async function fetchSeasons(): Promise<APIResponse<unknown>> {
  const response = await fetch(`${API_URL}/api/seasons`);

  if (!response.ok) {
    throw new Error('Failed to fetch seasons');
  }

  return response.json() as Promise<APIResponse<unknown>>;
}

export async function fetchMatchesBySeason(seasonId: string): Promise<APIResponse<unknown>> {
  const response = await fetch(`${API_URL}/api/matches?where[season][equals]=${seasonId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch matches');
  }

  return response.json() as Promise<APIResponse<unknown>>;
}
