import React from "react";
import { useLocation } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import PrimaryButton from "../Components/PrimaryButton";
import { ImTicket } from "react-icons/im";

const MovieDetails = () => {
  const location = useLocation();
  const data = location.state.object;

  const formattedDate = new Date(data.premiered)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");
  console.log(data);

  return (
    <div className="flex w-full max-h-[90vh] px-4 xsm:px-8 md:px-16 lg:px-32 pt-6 pb-4">
      <div className="flex-1 relative">
        <img
          src={data.image.original}
          alt={data.name}
          className="w-4/5 h-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black"></div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl">{data.name}</h1>
          <div className="flex gap-3 items-center text-[28px]">
            <p>{data.rating.average}</p>
            <p className="text-yellow-500 pb-1">
              <BsFillStarFill />
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-[#777777]">
          <p>{formattedDate} | </p>
          <p>{data.runtime ? data.runtime : "30"} mins | </p>
          <p>{data.language}</p>
        </div>
        <p className="text-xl mt-8 underline decoration-4 underline-offset-[16px] decoration-[#f71a2c]">
          OVERVIEW
        </p>
        <p className="text-[#d9d9d9] pt-6">
          {data.summary.replace(/<[^>]*>?/gm, "")}
        </p>

        <div className="grid grid-cols-2 gap-2 mt-8 w-fit">
          <p className="text-[#777777]">Genre</p>
          <p className="text-[#d9d9d9]">{data.genres.join(", ")}</p>
          {data.network && (
            <>
              <p className="text-[#777777]">Country</p>
              <p className="text-[#d9d9d9]">{data.network.country.name}</p>
            </>
          )}
        </div>

        <div className="pt-8">
          <PrimaryButton text="BOOK NOW" icon={<ImTicket />} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
