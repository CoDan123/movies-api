import react from "react";
import "./MovieInfoPage.css";

const MovieInfoPage = (props) => {
    return(
        <div className="movie-info-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${props.basePosterPath + props.movieInfoPage.backdrop_path})`}}>
            <div className="img-container">
            <img src={props.basePosterPath + props.movieInfoPage.poster_path} alt="" />
            </div>
            <div className="movie-info-box">
                <h1>{props.movieInfoPage.title}({props.movieInfoPage.release_date})</h1>
                <h3>{props.movieInfoPage.vote_average}{props.movieInfoPage.genre_ids[0]}</h3>
                <div className="overview-title-and-text">
                    <h4>Overview</h4>
                    <p>{props.movieInfoPage.overview}</p>
                </div>
            </div>
           {console.log(props.movieInfoPage)}
        </div>
    )
}

export default MovieInfoPage;
