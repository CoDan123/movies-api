import react, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import Footer from "./Components/Footer";
import Movie from './Components/Movie';
import SearchResults from "./Components/SearchResults";
import TrendingResults from './Components/TrendingResults';
import GenresResults from "./Components/GenresResults";



function App() { 

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [displayType, setDisplayType] = useState('home');
  
  const base_poster_path = "https://image.tmdb.org/t/p/w500";

const getTrending = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=087e6e53b047b687bcd13eb7475121ab');
  const data = await response.json();
  setMovies(data.results);
  setDisplayType('trending');
}

const getGenre = async () => {
  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=087e6e53b047b687bcd13eb7475121ab&language=en-US');
  const data = await response.json();
  setMovies(data.genres);
  setDisplayType('genres');
  console.log(data.genres);
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
    handleSearch={handleSearch}/>
  }else if (displayType === 'searchResults'){
    return <div className="search-results-container">
      {
        movies.map((movie) => (
          movie.poster_path? <SearchResults 
          movieTitle={movie.title} 
          basePosterPath={base_poster_path} 
          posterPath={movie.poster_path}/> : '')
        )
      }
    </div>
  } else if (displayType === 'trending'){
    return <div className="trending-container">
    {
      movies.map((movie) => (
        movie.title? <TrendingResults 
        movieTitle={movie.title} 
        basePosterPath={base_poster_path} 
        posterPath={movie.poster_path}/> : '')
      )
    }
  </div>
  } else if (displayType === 'genres'){
    return <div className='genres-container'>
      {
        movies.map((genre) => (
          genre.name? <GenresResults
          genreName={genre.name}
         /> : '')
        )
      }
    </div>
  }
}

    return (
      <div className="App">
        <Header logoToHome={() => setDisplayType('home')} getTrending={getTrending} getGenre={getGenre}/>
        {display()}
        <Footer/>
      </div>
    );
}

export default App;
