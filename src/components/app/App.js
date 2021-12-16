import React, { useState, useEffect } from 'react';
import Movies from '../movies';
import logo from "../../img/logo.png";
import { SEARCH_API, FEATURED_API } from "../../services/movieApiService";
import "./app.css";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const getMovies = (API) => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
      console.log(data);
      setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
      e.preventDefault();

      if(searchTerm) {
        getMovies(SEARCH_API+searchTerm);

        setSearchTerm("");
      }
  };

  const handleOnChange = (e) => {
      setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <div className="container">
      <header>
            <a href="/"><img className="logo" src={logo} alt="logo" /></a>
            <form onSubmit={handleOnSubmit}>
                <input 
                    className='search'
                    type='text'
                    placeholder='Search...'
                    value={searchTerm}
                    onChange={handleOnChange}
                />
            </form>
        </header>
      <Movies movies={movies} />
    </div>

  );
}

export default App;
