import React from 'react';
import "./GenresResults.css";

const GenresResults = (props) => {
    return (
        <div className='Genres-results-display'>
            <img src={props.basePosterPath + props.PosterPath} alt="" />
        </div>
    )
}

export default GenresResults;