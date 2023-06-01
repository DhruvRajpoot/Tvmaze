import React, { useContext, useEffect, useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MovieContext } from "../Context/Movie";
import { useNavigate } from "react-router-dom";

const MovieCard = (props) => {
  const navigate = useNavigate();
  const { data } = props;
  const { allMovies } = useContext(MovieContext);

  const formattedDate = new Date(data.premiered)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    setMovieDetails(allMovies.filter((movie) => movie.show.id === data.id));
  }, []);

  const handleClick = () => {
    console.log(allMovies.filter((movie) => movie.show.id === data.id));
    navigate("/moviedetails", {
      state: { object: movieDetails },
    });
  };

  return (
    <div className="flex flex-col justify-between gap-2 w-60 sm:w-56 h-full bg-transparent">
      <img src={data.image.original} alt={data.name} className="w-full h-80" />
      <h1 className="font-semibold tracking-wide pt-2">{data.name}</h1>
      <p className="text-xs text-[#777777]">{data.genres.join(", ")}</p>
      <p className="text-xs text-[#777777] mb-2">Premiered {formattedDate}</p>
      <SecondaryButton
        text="BOOK NOW"
        width={"fit-content"}
        icon={<MdOutlineLocalMovies />}
        onClick={handleClick}
      />
    </div>
  );
};

export default MovieCard;
