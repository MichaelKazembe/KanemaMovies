import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MoviePoster from './Components/Common/MoviePoster';
import Header from './Components/Navigation/Header';
import Footer from './Components/Navigation/Footer';
import { BASE_URL, API_KEY } from './api/tmdb';

const App = () => {
    const discoverMovies = '/discover/movie?sort_by=popularity.desc&';
    const URL = `${BASE_URL}${discoverMovies}${API_KEY}`;

    // state to store movies
    const [movies, setMovies] = useState([]);
    // state to store the search query
    const [query, setQuery] = useState('');
    // state to store whether a search has been performed
    const [searched, setSearched] = useState(false);

    // fetch movies from the API
    const getMovies = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results); // Update the movies state with the fetched data
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies(URL); // Fetch movies when the component mounts
    }, []);

    // handle search input change
    const handleChange = (e) => {
        setQuery(e.target.value); // Update the query state with the user's input
    }

    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const searchURL = `/search/movie?query=${query}&`;
        const searchQuery = `${BASE_URL}${searchURL}${API_KEY}`;
        getMovies(searchQuery); // Fetch movies based on the search query
        setSearched(true); // Set searched to true when the user performs a search
    }

    return (
        <div>
            <Header />
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button type="submit">Search</button>
                </div>
              </form>
            </div>
            <div>
              {/* MoviePoster component to display movies */}
              <MoviePoster title={searched ? "Search Results" : "Discover"} movies={movies} />
            </div>
            <Footer />
      
            
        </div>
    );
};

export default App;
