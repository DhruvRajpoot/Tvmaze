import { createContext, useEffect, useState } from "react";

const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [bookingForm, setBookingForm] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setAllMovies(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ allMovies, selectedMovie, setSelectedMovie , bookingForm, setBookingForm }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieContextProvider };
