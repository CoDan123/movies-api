import React from "react";
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className="search-results-display">
            {/* <h1>{props.movieTitle}</h1> */}
            <img src={props.basePosterPath + props.posterPath} alt="" />
        </div>
    )
}

export default SearchResults;