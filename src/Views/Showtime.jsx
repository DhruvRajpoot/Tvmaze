import React, { forwardRef, useContext } from "react";
import { MovieContext } from "../Context/Movie";
import MovieCard from "../Components/MovieCard";

const Showtime = forwardRef((props,ref) => {
  const { allMovies } = useContext(MovieContext);

  return (
    <div
      className="flex flex-col gap-12 pt-10 px-4 xsm:px-8 md:px-16 lg:px-32 pb-5"
      style={{
        background:
          "linear-gradient(164deg, rgba(0,0,0,1) 52%, rgba(21,0,0,1) 82%, rgba(28,0,0,1) 96%, rgba(20,0,0,1) 100%)",
      }}
      ref={ref}
    >
      <h1 className="text-3xl sm:text-5xl">
        <span className="font-extrabold text-4xl sm:text-6xl sm:me-2">Now</span> Showing
      </h1>
      <div className="flex flex-wrap gap-12 sm:gap-8 sm:gap-y-12 justify-center">
        {(allMovies.length !== 0 ? allMovies : []).map((movie, index) => (
          <MovieCard key={index} data={movie.show} score={movie.score} />
        ))}
      </div>
    </div>
  );
});

export default Showtime;
