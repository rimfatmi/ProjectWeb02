import { React, useState } from "react";
import Details from "./Component/Redux/Reducers/Details";
import "./App.css";
import MovieList from "./Component/MovieList";
import NavBar from "./Component/NavBar";
import AddMovie from "./Component/AddMovie";

function App() {
  const [movies, setMovies] = useState(Details);
  const [search, setSearch] = useState("");
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch} />
      <MovieList movies={movies} search={search} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
