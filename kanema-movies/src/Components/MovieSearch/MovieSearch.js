import React, { useState } from "react";
import './movieSearch.css';
import MoviePoster from "../Common/MoviePoster";

//api key
const API_KEY = 'f899014959d0d08545750f5676e572fc';
//api url
const API_URL = 'https://api.themoviedb.org/3/search/movie?';

const Search = () => {
    const [nameSearch, setNameSearch] = useState("");
    const [movies, setMovies] = useState([]);

    //search query
    const query = `&query=${nameSearch}`;
    //search api url
    const searchURL = `${API_URL}${API_KEY}${query}`;

    //get movie information function from the api
    const getMovie = async () => {
        try {
            await fetch(searchURL)
            .then(response => response.json())
            .then(data => setMovies(data.results));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault(); //prevent page from refreshing
        getMovie();//call getMovie function

        console.log(nameSearch);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="search-Bar">
                    <label htmlFor="nameSearch">Search for a movie</label>
                    <input
                        type="text" name="nameSearch"
                        placeholder="Movie Name"
                        id="search" className="search"
                        //set the value of the input to the nameSearch state
                        onChange={(e) => setNameSearch(e.target.value)}
                    />
                    <button
                        type='submit'>
                        Search
                    </button>
                </div>
            </form>

            {movies ?
                <MoviePoster title="Search Results" movies={movies} />
                : null}
        </>
    );

};

export default Search;