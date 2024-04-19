import React, { useState, useEffect } from 'react';

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        // Fetch genres from themoviedatabase.com API
        const fetchGenres = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=YOUR_API_KEY');
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    const handleGenreChange = (event) => {
        setSelectedGenre(event.target.value);
        // Fetch movies based on selected genre
        // You can use the selectedGenre value to make an API call and get the movies
    };

    return (
        <div>
            <h1>Genres</h1>
            <select value={selectedGenre} onChange={handleGenreChange}>
                <option value="">Select a genre</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
            {/* Display movies based on selected genre */}
        </div>
    );
};

export default Genres;