import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allTheDirectors = directors.map((director, ndx) => 
    <div key={ndx}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie, ndx) =>
        <li key={ndx}>{movie}</li>
        )}
      </ul>
    </div>
    )
  return (  
    <div>
     <h1>Directors Page</h1>
    {allTheDirectors}
    </div>
  );
}

export default Directors
