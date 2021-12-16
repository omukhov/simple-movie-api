import React  from 'react';
import Movie from '../movie';
import "./movies.css";

const Movies = ({movies}) => {

  return (
      <div className='movie-container'>
          {movies.map((movie) => {
            return (
              <Movie 
                key={movie.id} 
                {...movie} 
              />
            )
          })}
      </div>
  );
};

export default Movies;