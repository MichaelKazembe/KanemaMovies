import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from '../../api/tmdbAPI';

const MovieDetails = ({ movieID }) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${BASE_URL}movie/${movieID}?${API_KEY}`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovie();
    }, [movieID]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            {/* Display other relevant movie details here */}
        </div>
    );
};

export default MovieDetails;