import { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState([]);
  const [topMovies, setTopMovies] = useState({});

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setTopMovies(data[0]);
      setAllMovies(data.slice(1));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ topMovies, allMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
