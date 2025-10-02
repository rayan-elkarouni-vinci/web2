interface Film {
  id: number;
  title: string;
  director: string;
  duration: number; // duration in minutes
  budget?: number; // budget in millions
  description?: string; // brief description of the film
  imageUrl?: string;
}

type NewFilm = Omit<Film,"id">;

export type { Film, NewFilm };
