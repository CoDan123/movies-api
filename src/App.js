import react, {useState} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import SearchResultsCards from "./Components/SearchResultsCards";
import TrendingResultsCards from './Components/TrendingResultsCards';
import MovieInfoPage from "./Components/MovieInfoPage";

function App() { 
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [displayType, setDisplayType] = useState('home');
  const [movieInfoPage, setMovieInfoPage] = useState('');
  
  const base_poster_path = "https://image.tmdb.org/t/p/w500";

const getTrending = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=087e6e53b047b687bcd13eb7475121ab');
  const data = await response.json();
  setMovies(data.results);
  setDisplayType('trending');
}

const updateSearch = (e) => {
  setSearch(e.target.value);
}

const handleSearch = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=087e6e53b047b687bcd13eb7475121ab&query=${search}`);
  const data = await response.json();
  setMovies(data.results);
  setDisplayType('searchResults');
  console.log(data.results);
}



const display = () => {
  if(displayType === 'home' || displayType === undefined) {
    return <HeroSection 
    updateSearch={updateSearch} 
    handleSearch={handleSearch}
    />
  }else if (displayType === 'searchResults'){
    return <div className="search-cards-outer">
      <p>Showing results for "{search}"</p>
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
      <p>Showing results for "Trending"</p>
      <div className="trending-cards-container">
        {
          movies.map((movie) => (
            movie.title? <TrendingResultsCards
            key={Math.random()}
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
      <p>Showing results for "Movie-info"</p>
      <div className="movie-info-page-container">
        
          <MovieInfoPage 
          setMovieInfoPage={setMovieInfoPage}
          movieInfoPage={movieInfoPage}
          />
           
      </div>
    </div>
  } 
}

    return (
      <div className="App">
        <Header logoToHome={() => setDisplayType('home')} getTrending={getTrending}/>
        {display()}
      </div>
    );
}

export default App;
