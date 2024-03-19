import React, { useState } from "react";
import "./App.css";

import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMovieHandler() {
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transFormedMovie = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMovies(transFormedMovie);
      });
  }
  return (
    <div className="App">
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </div>
  );
}

export default App;
