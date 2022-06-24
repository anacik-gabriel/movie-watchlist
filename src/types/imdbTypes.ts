export type MovieType =
  | "Top250Movies"
  | "Top250TVs"
  | "MostPopularMovies"
  | "MostPopularTVs"
  | "InTheaters"
  | "ComingSoon";

export interface imdbMovie {
  id: string;
  rank: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  imDbRatingCount: string;
  genres: string;
  linkEmbed: string;
  plot: string;
}

export interface imdbMoviesApiResponse {
  data: {
    items: imdbMovie[];
  };
}

export interface imdbMovieApiResponse {
  data: imdbMovie;
}
