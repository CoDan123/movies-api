import React from "react";
import './TrendingResults.css';

const TrendingResults = (props) => {
    return (
        <div className="trending-results-display">
            {/* <h1>{props.movieTitle}</h1> */}
            <img src={props.basePosterPath + props.posterPath} alt="" />
        </div>
    )
}

export default TrendingResults;