import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Movie } from '@mui/icons-material';
import MoviePoster from '../Common/MoviePoster';

const Trending = () => {
    const [movies, setMovies] = useState([]);
    

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            const API_KEY = 'api_key=f899014959d0d08545750f5676e572fc';

            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/trending/movie/week?${API_KEY}`
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