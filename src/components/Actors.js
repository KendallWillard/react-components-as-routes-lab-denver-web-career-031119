import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allTheActors = actors.map((actor, ndx) => 
    <div key={ndx}>
      <h3>{actor.name}</h3>
        <ul>
        {actor.movies.map((movie, ndx) => 
           <li key={ndx}>{movie}</li>
        )}
        </ul>
    </div>
  )
  return(
    <div>
      <h1>Actors Page</h1>
      {allTheActors}
    </div>
  );
};

export default Actors;
