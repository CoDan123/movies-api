import React from "react";
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className="search-results-display">
            <h1>{props.movieTitle}</h1>
        </div>
    )
}

export default SearchResults;