import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './movieList.css';



const Movies = () => {
    //Movie api url
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?';
    //api key
    const API_KEY = 'api_key=f899014959d0d08545750f5676e572fc';
    //api url
    const URL = `${API_URL}${API_KEY}`;

    //state to store movies
    const [movies, setMovies] = useState([]);

    //fetch movies from the api
    const getMovies = async() => {
        try{
            await fetch(URL)
            .then(response => response.json())
            .then(data => setMovies(data.results));
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return(
        <div>
            <h2 className="h2 display-3 my-3">Discover</h2>   
            {movies.map((movie) => (
                //Display movie title, poster and overview
                <div className="poster-container" key={movie.id}>
                    {/* <h1 className="movie-title">{movie.title}</h1> */}
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    {/* <div className="movie-overview">{movie.overview}</div> */}
                </div>
            ))}
        </div>
    )

};

export default Movies;