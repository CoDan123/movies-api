import react, {useState, useEffect} from "react";
import "./App.css";
import Header from './Components/Header';
import HeroSection from './Components/Hero-Section';
import Footer from "./Components/Footer";
import Movie from './Components/Movie';
import axios from 'axios';

  
function App() {

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState();

  

    return (
      <div className="App">
        <Header />
        <HeroSection/>
        <Footer/>
      </div>
    );
}

export default App;
