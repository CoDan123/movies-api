import "./MovieInfoPage.css";

const MovieInfoPage = (props) => {
    return(
        <div className="movie-info-container" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${props.basePosterPath + props.movieInfoPage.backdrop_path})`}}>
            <div className="img-container">
            <img src={props.basePosterPath + props.movieInfoPage.poster_path} alt="" />
            </div>
            <div className="movie-info-box">
                <h1>{props.movieInfoPage.title} <span>({props.movieInfoPage.release_date.substr(0, 4)})</span></h1>

                    <div className="rating-date-language">
                        {props.movieInfoPage.vote_average}/10 ({props.movieInfoPage.vote_count} votes)
                        <div className="circle-container">
                            <div className="circle">
                            </div>
                        </div>
                        Release date: {props.movieInfoPage.release_date}
                        <div className="circle-container">
                            <div className="circle">
                            </div>
                        </div>
                        Language: {props.movieInfoPage.original_language.toUpperCase()}
                    </div>
               
                <div className="overview-title-and-text">
                    <h4>Overview</h4>
                    <p>{props.movieInfoPage.overview}</p>
                </div>
                
                <div className="buttons-wrapper">
                    <div className="back-to-search" onClick={() => {props.setDisplayType(props.goBack)}}>Back to search</div>
                    <a href={`https://www.themoviedb.org/movie/${props.movieInfoPage.id}?language=en-US`} target="_blank" rel="noreferrer" className="view-on-tmdb">View on TMDB</a>
                </div>
            
            </div>
        </div>
    )
}

export default MovieInfoPage;

