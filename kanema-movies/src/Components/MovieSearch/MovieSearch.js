import React from "react";
import './movieSearch.css'

const Search = () => {

    
    return (
        <div className="search-container">
            <form id="form">
                <input type="text" placeholder="Movie Title" id="search" className="search">

                </input>

            </form>
            <button>Search</button>
        </div>
    )

}

export default Search;