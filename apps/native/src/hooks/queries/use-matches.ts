import { useQuery } from '@tanstack/react-query';

import { fetchMatchesBySeason, type APIResponse } from '@/src/lib/api/client';
import type { Match } from '@/src/lib/api/types';

export function useMatches(seasonId: string) {
  return useQuery({
    queryKey: ['matches', seasonId],
    queryFn: async () => {
      const response = await fetchMatchesBySeason(seasonId);

      return response as APIResponse<Match>;
    },
  });
}
