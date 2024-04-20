import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePoster from '../Common/MoviePoster';
import {BASE_URL, API_KEY} from '../../api/tmdbAPI';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const trendingMovies = '/trending/movie/week?'

            try {
                const response = await fetch(
                    `${BASE_URL}${trendingMovies}${API_KEY}&page=1`
                );
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
            <MoviePoster title="Trending" movies={movies} />
        
    );
    
};

export default Trending;
