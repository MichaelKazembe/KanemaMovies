// Import any required libraries or modules here

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = 'YOUR_API_KEY';

// Define the API components for different endpoints
const apiComponents = {
    // Example endpoint: Get popular movies
    popularMovies: {
        url: `${BASE_URL}/movie/popular`,
        method: 'GET',
        params: {
            api_key: API_KEY,
            // Add any additional parameters here
        },
    },
    
    // Add more API components for other endpoints here
    
};

// Export the API components
export default apiComponents;