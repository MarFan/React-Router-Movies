import React from 'react';

const MovieCard = (props) => {
  const { title, director, metascore, stars } = props.movie;
  console.log(props)

  function SaveBTN(props) {
    if(!props === '/'){
      return <div className="save-button">Save</div>;
    }else{
      return null
    }
  }

  return (
    <div className="save-wrapper">
      <div className="">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <h3>Actors</h3>

          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>      
        <SaveBTN props={props.location.pathname} />
    </div>
  )
};

export default MovieCard;
