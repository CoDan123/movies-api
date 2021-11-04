import react, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import Footer from "./Components/Footer";
import Movie from './Components/Movie';
import SearchResults from './Components/SearchResults'



function App() { 

  const [movies, setMovies] = useState([]);
  
  const base_poster_path = "https://image.tmdb.org/t/p/w500";

const getTrending = async () => {
  const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=087e6e53b047b687bcd13eb7475121ab');
  const data = await response.json();
  setMovies(data.results);
  console.log(data.results);
}

    return (
      <div className="App">
        <Header getTrending={getTrending}/>
        {
          movies.length === 0? 
          <HeroSection /> : 
          <div className="results-container">
            {
              movies.map((movie) => (
              movie.title? <SearchResults movieTitle={movie.title} basePosterPath={base_poster_path} posterPath={movie.poster_path}/> : ''))
            }
          </div>
        }
        <Footer/>
      </div>
    );
}

export default App;
