import React, { useState } from "react";
import "./App.css";

import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  async function fetchMovieHandler() {
    setLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transFormedMovie = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transFormedMovie);
    setLoading(false);
  }
  return (
    <div className="App">
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>found no movies</p>}
        {isLoading && <p>is loading...</p>}
      </section>
    </div>
  );
}

export default App;
