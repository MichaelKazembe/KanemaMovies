import React from 'react';
import MoviePoster from '../Common/MoviePoster';

const FavoriteMovie = ({ movies }) => {
    return (
        <MoviePoster title="Favorites" movies={movies} />
    );
};

export default FavoriteMovie;
