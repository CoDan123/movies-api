import React from "react";
import './SearchResultsCards.css';

const SearchResultsCards = (props) => {
    return (
        <div className="movie-card">
            <img src={props.basePosterPath + props.posterPath} alt="" />
            <div className="movie-over">
                <div className="titleRatingContainer">
                    <h2>{props.movieTitle}</h2>
                    <h3>{props.voteAverage}/10</h3>
                </div>
                <div className="view-button-container">
                    <button onClick={() => props.setDisplayType('home')}>View</button>
                </div>
            </div>
        </div>
    )
}

export default SearchResultsCards;