import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePoster from "../Common/MoviePoster";

const MoviesList = () => {
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&';
    const API_KEY = 'api_key=f899014959d0d08545750f5676e572fc';
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
        <MoviePoster title="Discover" movies={movies} />
    )

};

export default MoviesList;