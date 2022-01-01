import React from "react";

const TrendingResults = (props) => {
    return (
        <div className="movie-card">
            {/* <h1>{props.movieTitle}</h1> */}
            <img src={props.basePosterPath + props.posterPath} alt="" />
        </div>
    )
}

export default TrendingResults;