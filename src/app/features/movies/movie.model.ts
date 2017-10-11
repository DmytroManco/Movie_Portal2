export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  stars: number;
  likes: number;
  genres: string[];
  actors: string[];
  director: string;
  description: string;
}
