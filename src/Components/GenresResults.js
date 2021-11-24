import React from 'react';
import "./GenresResults.css";

const GenresResults = (props) => {
    return (
        <div className='genres-results-display'>
            {props.genreName}
        </div>
    )
}

export default GenresResults;