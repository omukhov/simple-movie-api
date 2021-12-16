import React from 'react';
import { IMG_API } from "../../services/movieApiService";
import "./movie.css";
import picture from "../../img/notFound.jpg";

const setVoteClass = (vote) => {
    if (vote > 8) {
        return 'purple';
    } else if (vote > 7) {
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};

const Movie = ({title, poster_path, overview, vote_average}) => {
    return (
        <div className="movie">
           <img src={poster_path ? (IMG_API + poster_path) : picture} alt={title} />
           <div className='movie-info'>
                <h3>
                    {title}
                </h3>
                <span className={`tag ${setVoteClass(vote_average)}`} >{vote_average}</span>
           </div>

           <div className='movie-over'>
                <h2>Overview:</h2>
                <p>{overview}</p>
           </div>
        </div>
    );
};

export default Movie;
