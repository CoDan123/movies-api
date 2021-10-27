import react from "react";
import Movie from './Components/Movie';

function App() {

  const API_KEY = '087e6e53b047b687bcd13eb7475121ab';

  return (
    <div className="App">
      {movies.map(movie =>(
        <Movie />
      ))}
    </div>
  );
}

export default App;
