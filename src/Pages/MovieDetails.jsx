import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import PrimaryButton from "../Components/PrimaryButton";
import { ImTicket } from "react-icons/im";
import { MovieContext } from "../Context/Movie";
import BookingForm from "../Components/BookingForm";
import Alert from "../Components/Alert";

const MovieDetails = () => {
  const { bookingForm, setBookingForm, setSelectedMovie } =
    useContext(MovieContext);
  const [showAlert, setShowAlert] = useState(false);
  const location = useLocation();
  const data = location.state.object;

  const formattedDate = new Date(data.premiered)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  useEffect(() => {
    setSelectedMovie({});
    setBookingForm(false);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[90vh] px-4 xsm:px-8 md:px-16 lg:px-32 pt-6 pb-4 relative">
      <div className="flex-1 relative flex justify-center md:justify-start">
        <img
          src={data.image.original}
          alt={data.name}
          className="w-full sm:w-4/5 h-[85vh]"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black"></div>
      </div>
      <div className="flex-1 flex flex-col gap-3 mt-6 md:mt-0">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl sm:text-5xl">{data.name}</h1>
          <div className="flex gap-3 items-center text-2xl sm:text-[28px]">
            <p>{data.rating.average ? data.rating.average : "7"}</p>
            <p className="text-yellow-500 pb-1">
              <BsFillStarFill />
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-[#777777] text-sm sm:text-base">
          <p>{formattedDate} | </p>
          <p>{data.runtime ? data.runtime : "30"} mins | </p>
          <p>{data.language}</p>
        </div>
        <p className="text-base sm:text-xl mt-8 underline decoration-4 underline-offset-[16px] decoration-[#f71a2c]">
          OVERVIEW
        </p>
        <p className="text-[#d9d9d9] pt-6 text-sm sm:text-base">
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
          <PrimaryButton
            text="BOOK NOW"
            icon={<ImTicket />}
            onClick={() => {
              setSelectedMovie(data);
              setBookingForm(true);
            }}
          />
        </div>
      </div>

      {bookingForm && <BookingForm setShowAlert={setShowAlert}/>}

      {showAlert && <Alert text="Ticket Booked Successfully" />}
    </div>
  );
};

export default MovieDetails;
