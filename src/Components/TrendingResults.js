import React from "react";

const TrendingResults = (props) => {
    return (
        <div className="movie-card">
            {/* <h1>{props.movieTitle}</h1> */}
            <img src={props.basePosterPath + props.posterPath} alt="" />
            <div className="movie-over">
                <h2>{props.movieTitle}</h2>
                <p>{props.overview}</p>
            </div>
        </div>
    )
}

export default TrendingResults;