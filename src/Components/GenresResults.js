import React from 'react';
import "./GenresResults.css";

const GenresResults = (props) => {
    return (
        <div className='genres-results-display'>
            {props.movieName}
        </div>
    )
}

export default GenresResults;