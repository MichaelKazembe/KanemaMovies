import React from "react";

const MoviePoster = (props) => {
    return(
        <div>
            <h4 className="mt-5 mb-3">{props.title}</h4>
            <hr />   
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