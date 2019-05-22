import React from 'react'


const MovieCard = (props) => {

    return(
    <div>
        {props.title}
        {props.time}
        <ul>{props.genres}</ul>
        {props.metascore}
    </div>
    )
  }

  export default MovieCard