import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=895d59154526d39c0a00872ad03b32ea&language=en-US&page=1"
      );
      res
        .json()
        .then(res => setMovies(res.results))
        .catch(err => console.error(err));
    }

    fetchData();
  }, []);
  const [movies, setMovies] = useState([]);
  console.log("movies");
  console.log(movies);
  return (
    <div className="moviecards">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          name={movie.title}
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          id={movie.id}
          movieStatus={movie.release_date}
        />
      ))}
    </div>
  );
};

export default MovieList;
