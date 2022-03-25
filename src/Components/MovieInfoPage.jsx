import react from "react";
import "./MovieInfoPage.css";

const MovieInfoPage = (props) => {
    return(
        <div className="movie-info-container" style={{backgroundImage: `url(${props.basePosterPath + props.movieInfoPage.backdrop_path})`}}>
            <div className="img-container">
            <img src={props.basePosterPath + props.movieInfoPage.poster_path} alt="" />
            </div>
            <div className="movie-info-box">
                <h1>{props.movieInfoPage.title}({props.movieInfoPage.release_date})</h1>
                <h3>{props.movieInfoPage.vote_average}</h3>
                <h4>Overview</h4>
                <h5>{props.movieInfoPage.overview}</h5>
            </div>
           {console.log(props.movieInfoPage)}
        </div>
    )
}

export default MovieInfoPage;

