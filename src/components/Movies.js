import React from 'react';
import { movies } from '../data';
import MovieCard from './MovieCard'


const Movies = () => {
const allTheMovies = movies.map((movie, ndx) => 
  <div key={ndx}>
    <h2>Name: {movie.title}</h2>
    <h4>Time: {movie.time}</h4>
    <ul>
      {movie.genres.map((genre, ndx) =>
      <li key={ndx}>{genre}</li>
      )}
    </ul>
  </div>
  )
  
  return (
    <div>
      <h1>Movies Page</h1>
      {allTheMovies}
    </div>
  );
};

export default Movies;
