export interface Season {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  season: string | Season;
  seasonName?: string | null;
  updatedAt: string;
  createdAt: string;
}
