import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MoviePoster.css';

const MoviePoster = (props) => {
    return(
        <div className="movie-container">
            <h4 className="mt-5 mb-1">{props.title}</h4>
            <hr className="hr-animation"/>   
            {props.movies.map((movie) => (
                //Display movie title, poster and overview
                <div className="poster-container" key={movie.id}>
                    
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    {/* <p className="movie-title">{movie.title}</p>
                    <div className="movie-overview">{movie.overview}</div> */}
                </div>
            ))}
        </div>
    )
};

export default MoviePoster;