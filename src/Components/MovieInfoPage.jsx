import react from "react";

const MovieInfoPage = (props) => {
    return(
        <div className="">
            <h1>{props.movieInfoPage.title}({props.movieInfoPage.release_date})</h1>
            <h3>{props.movieInfoPage.vote_average}</h3>
            <h4>Overview</h4>
            <h5>{props.movieInfoPage.overview}</h5>
            <h5>{console.log(props.movieInfoPage)}</h5>
        </div>
    )
}

export default MovieInfoPage;

