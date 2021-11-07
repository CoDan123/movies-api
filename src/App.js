import react, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import Footer from "./Components/Footer";
import Movie from './Components/Movie';
import TrendingResults from './Components/TrendingResults';



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

const updateSearch = (e) => {
  setSearch(e.target.value);
}

const handleSearch = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=087e6e53b047b687bcd13eb7475121ab&query=${search}`);
  const data = await response.json();
  setDisplayType('searchResults')
  console.log(data);
}

const display = () => {
  if(displayType === 'home' || displayType === undefined) {
    return <HeroSection updateSearch={updateSearch} handleSearch={handleSearch}/>
  }else if (displayType === 'searchResults'){
    <SearchResults/>
  } else if (displayType === 'trending'){
    return <div className="trending-container">
    {
      movies.map((movie) => (
      movie.title? <TrendingResults movieTitle={movie.title} basePosterPath={base_poster_path} posterPath={movie.poster_path}/> : ''))
    }
  </div>
  }
}

    return (
      <div className="App">
        <Header getTrending={getTrending}/>
        {display()}
        <Footer/>
      </div>
    );
}

export default App;
