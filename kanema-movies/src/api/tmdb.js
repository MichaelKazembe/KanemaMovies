// Import any required libraries or modules here

export const BASE_URL = 'https://api.themoviedb.org/3';

export const API_KEY = 'api_key=f899014959d0d08545750f5676e572fc';

export const API_IMG = 'https://image.tmdb.org/t/p/w500/';

// Define the API components for different endpoints
const ApiComponents = {
    // Example endpoint: Get popular movies
    popularMovies: {
        url: `${BASE_URL}/movie/popular`,
        method: 'GET',
        params: {
            api_key: API_KEY,
            // Add any additional parameters here
        },
    },

    // Get movie details
    movieDetails: {
        url: `${BASE_URL}/movie/{movie_id}`,
        method: 'GET',
        params: {
            api_key: API_KEY,
            // Add any additional parameters here
        },
    },

    // Get Movie Results
    searchMovie: {
        url: `${BASE_URL}/search/movie?${API_KEY}`,
        method: 'GET',
        params: {
            api_key: API_KEY,
            // Add any additional parameters here
        },
    },

    // Get Trending Movies
    trendingMovies: {
        url: `${BASE_URL}/trending/movie/week?${API_KEY}&page=1`,
        method: 'GET',
        params: {
            api_key: API_KEY,
            // Add any additional parameters here
        },
    },

    // Get Movie Genres
    movieGenres: {
        url: `${BASE_URL}/genre/movie/list`,
        method: 'GET',
        params: {
            api_key: API_KEY,
            // Add any additional parameters here
        },
    },
    
};

// Export the API components
export default ApiComponents;