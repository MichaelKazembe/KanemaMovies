import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePoster from "../Common/MoviePoster";
import { BASE_URL, API_KEY} from '../../api/tmdb';

const Movies = () => {
    const discoverMovies = '/discover/movie?sort_by=popularity.desc&';
    const URL = `${BASE_URL}${discoverMovies}${API_KEY}`;

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

export default Movies;