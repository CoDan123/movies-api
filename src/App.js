import react, {useState} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import SearchResultsCards from "./Components/SearchResultsCards";
import TrendingResultsCards from './Components/TrendingResultsCards';
import MovieInfoPage from "./Components/MovieInfoPage";
import axios from "axios";

function App() { 
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [displayType, setDisplayType] = useState('home');
  const [movieInfoPage, setMovieInfoPage] = useState('');
  const [goBack,setGoBack] = useState('');
  
  //Needed for retrieving movie image
  const base_poster_path = "https://image.tmdb.org/t/p/w500";

const getTrending = async () => {
  const response = await axios.get('/.netlify/functions/getTrendingMovies');
  setMovies(response.data.results);
  setDisplayType('trending');
  setGoBack('trending')
}

const updateSearch = (e) => {
  setSearch(e.target.value);
}

const handleSearch = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=087e6e53b047b687bcd13eb7475121ab&query=${search}`);
  setMovies(response.data.results);
  setDisplayType('searchResults');
  setGoBack('searchResults')
}



const display = () => {
  if(displayType === 'home' || displayType === undefined) {
    return <HeroSection 
    updateSearch={updateSearch} 
    handleSearch={handleSearch}
    />
  }else if (displayType === 'searchResults'){
    return <div className="search-cards-outer">
      <div className="results-and-back-btn">
          <div onClick={() => setDisplayType('home')} className="go-back-btn">Go Back</div>
          <p>Showing results for "{search}"</p>
      </div>
      <div className="search-cards-container">
        {
          movies.map((movie) => (
            movie.poster_path? <SearchResultsCards
            key={Math.random()}
            setDisplayType={setDisplayType}
            setMovieInfoPage={setMovieInfoPage}
            movieData={movie}
            voteAverage={movie.vote_average} 
            movieTitle={movie.title} 
            basePosterPath={base_poster_path} 
            posterPath={movie.poster_path}
            />
            : '')
          )
        }
      </div>
    </div>
  } else if (displayType === 'trending'){
    return <div className="trending-cards-outer">
      <div className="results-and-back-btn">
          <div onClick={() => setDisplayType('home')} className="go-back-btn">Go Back</div>
          <p>Showing results for "Trending"</p>
      </div>
      <div className="trending-cards-container">
        {
          movies.map((movie) => (
            movie.title? <TrendingResultsCards
            key={Math.random()}
            setDisplayType={setDisplayType}
            setMovieInfoPage={setMovieInfoPage}
            movieData={movie}
            voteAverage={movie.vote_average} 
            movieTitle={movie.title} 
            basePosterPath={base_poster_path} 
            posterPath={movie.poster_path}
            /> 
            : '')
          )
        }    
      </div>
    </div>
  } else if (displayType === 'movieInfoPage'){
    return <div className="movie-info-page">
        
          <MovieInfoPage 
          setMovieInfoPage={setMovieInfoPage}
          movieInfoPage={movieInfoPage}
          basePosterPath={base_poster_path}
          setDisplayType={setDisplayType}
          goBack={goBack}
          />
           
    </div>
  } 
}

    return (
      <div className="App">
        <Header logoToHome={() => setDisplayType('home')} 
        getTrending={getTrending} 
        displayType={displayType} 
        updateSearch={updateSearch} 
        handleSearch={handleSearch}
        setSearch={setSearch}
        />
        {display()}
      </div>
    );
}

export default App;
