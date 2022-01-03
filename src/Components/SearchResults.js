import React from "react";
import './SearchResults.css';

const SearchResults = (props) => {
    return (
        <div className="movie-card">
            <img src={props.basePosterPath + props.posterPath} alt="" />
            <div className="movie-over">
                <div className="titleRatingContainer">
                    <h2>{props.movieTitle}</h2>
                    <h3>{props.voteAverage}/10</h3>
                </div>
                <button className="view-button">View</button>
            </div>
        </div>
    )
}

export default SearchResults;