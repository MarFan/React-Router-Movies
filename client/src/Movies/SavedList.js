import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
  
  const goHome = event => {
    props.history.push('/');
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="saved-movie">{movie.title}</Link>
      ))}
      <button onClick={goHome} className="home-button">Home</button>
    </div>
  )
}

export default SavedList;
