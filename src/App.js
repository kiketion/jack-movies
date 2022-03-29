import React, { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=94c5bd7ffcd2c2633d9a7d9054fd8d41';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movieReq) => (
        <MovieBox key={movieReq.id} {...movieReq} />
      ))}
    </div>
  );
}

export default App;
