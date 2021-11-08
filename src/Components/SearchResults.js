import React from "react";
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className="search-results-display">
            <img src={props.basePosterPath + props.posterPath} alt="" />
        </div>
    )
}

export default SearchResults;