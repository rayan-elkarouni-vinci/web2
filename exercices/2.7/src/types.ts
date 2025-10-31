interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number; // En minutes
  imageUrl?: string;
  description?: string;
  budget?: number; // En millions
}

export type { Movie };
