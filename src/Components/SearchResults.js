import React from "react";
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className="movie-card">
            <img src={props.basePosterPath + props.posterPath} alt="" />
            <div className="movie-over">
                <h2>{props.movieTitle}</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default SearchResults;