import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} className="movie-card">
          <MovieCard key={movie.id} movie={movie} location={props.location} />
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
