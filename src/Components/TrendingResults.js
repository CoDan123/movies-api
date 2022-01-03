import React from "react";

const TrendingResults = (props) => {
    return (
        <div className="movie-card">
            {/* <h1>{props.movieTitle}</h1> */}
            <img src={props.basePosterPath + props.posterPath} alt="" />
            <div className="movie-over">
            <div className="titleRatingContainer">
                    <h2>{props.movieTitle}</h2>
                    <h3>{props.voteAverage}/10</h3>
                </div>
                <div className="view-button-container">
                    <button>View</button>
                </div>
            </div>
        </div>
    )
}

export default TrendingResults;