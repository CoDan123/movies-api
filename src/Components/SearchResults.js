import React from "react";
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className="movie-card">
            <img src={props.basePosterPath + props.posterPath} alt="" />
        </div>
    )
}

export default SearchResults;