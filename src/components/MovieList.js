import React, { useState } from "react";
import MovieCard from "./MovieCard";

// Use this api to fetch movies
// http://www.omdbapi.com/?t=seven&i=tt3896198&apikey=9cc41c24

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Ad Astra",
      image: "./images/adastra.jpg",
      id: "1"
    },
    {
      name: "Moneyball",
      image: "./images/moneyball.jpg",
      id: "2"
    },
    {
      name: "Once upon a time in hollywood",
      image: "./images/onceuponatimeinhollywood.jpg",
      id: "3"
    },
    {
      name: "World War Z",
      image: "./images/worldwarz.jpg",
      id: "4"
    },
    {
      name: "Inglorious Bastards",
      image: "./images/ingloriousbastards.jpg",
      id: "5"
    }
  ]);
  return (
    <div className="moviecards">
      {movies.map(movie => (
        <MovieCard key={movie.id} name={movie.name} image={movie.image} id={movie.id} movieStatus="" />
      ))}
    </div>
  );
};

export default MovieList;
