import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './MoviePoster.css';
import MovieDetails from "./MovieDetails";

const MoviePoster = props => {
    const { movies } = props;

    if (!movies || movies.length === 0) {
        return <p>No movies, sorry</p>;
    }

    return(
        <div className="movie-container">
            <h4 className="mt-5 mb-1">{props.title}</h4>
            <hr className="hr-animation"/>   
            {props.movies.map((movie) => (
                //Display movie title, poster and overview
                <div onClick={() => {return <MovieDetails />}} className="poster-container" key={movie.id}>
                    
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    {/* <p className="movie-title">{movie.title}</p> */}
                    {/* <div className="movie-overview">{movie.overview}</div> */}
                </div>
            ))}
        </div>
    )
};

export default MoviePoster;