import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ movies }) => {
  if (!movies || movies.results === undefined) {
    return null;
  }
  return (
    <main className="movies-wrapper">
      {movies.results.map((movie) => {
        return <MovieCard key={movie.id} {...movie} />;
      })}
    </main>
  );
};

export default MovieList;
