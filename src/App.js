import react, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import Footer from "./Components/Footer";
import Movie from './Components/Movie';

  const API_KEY = '087e6e53b047b687bcd13eb7475121ab';
  const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?api_key=087e6e53b047b687bcd13eb7475121ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
  const IMG_API = 'https://image.tmdb.org/t/p/w500';
  const SEARCH_API = 'https://api.themoviedb.org/3/search/company?api_key=087e6e53b047b687bcd13eb7475121ab&page=1&query='

  function App() {
    // const [movies, setMovies] = useState([]);
    // const [search, setSearch] = useState('');
    // const [query, setQuery] = useState('');

    // const getMovies = async () => {
    //     const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=087e6e53b047b687bcd13eb7475121ab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
    //     const data = response.json();
    //     console.log(data);
    // }

    
  

  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <Footer/>
    </div>
  );
}

export default App;
