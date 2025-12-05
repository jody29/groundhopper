import { useQuery } from '@tanstack/react-query';

import { fetchSeasons, type APIResponse } from '@/src/lib/api/client';
import type { Season } from '@/src/lib/api/types';

export function useSeasons() {
  return useQuery({
    queryKey: ['seasons'],
    queryFn: async () => {
      const response = await fetchSeasons();

      return response as APIResponse<Season>;
    },
  });
}
