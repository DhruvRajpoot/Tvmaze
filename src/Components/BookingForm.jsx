import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../Context/Movie";
import { AiFillCloseCircle } from "react-icons/ai";
import "./uicomponents.css";
import PrimaryButton from "./PrimaryButton";
import { json } from "react-router-dom";

const BookingForm = (props) => {
  const { selectedMovie, setBookingForm } = useContext(MovieContext);
  const [ticketData, setTicketData] = useState({
    name: "",
    phone: "",
    moviename: selectedMovie.name,
    date: "",
    time: "",
    seats: "",
    image: selectedMovie.image?selectedMovie.image.medium:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("ticketData")) || [];
    storedData.push(ticketData);
    localStorage.setItem("ticketData", JSON.stringify(storedData));
    setTicketData({});
    props.setShowAlert(true);
    setTimeout(() => {
        props.setShowAlert(false);    
    }, 2500);
    setBookingForm(false);
  };

  useEffect(() => {
    const previousData = localStorage.getItem("ticketData");
    console.log(previousData);
  }, []);

  return (
    <>
      {selectedMovie && (
        <>
          <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-60 z-40"></div>
          <div className="booking-form w-[95vw] md:w-[75vw] lg:w-[60vw] xl:w-[45vw] h-[90vh] sm:h-[70vh] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-50 rounded-lg bg-[#15151c] px-5 py-4 overflow-scroll">
            <div className="flex justify-center items-center">
              <h1 className="text-xl sm:text-2xl">Movie Booking Form</h1>
              <button
                onClick={() => setBookingForm(false)}
                className="absolute right-5 bg-[#303030] text-xl sm:text-3xl rounded-full outline-none"
                title="Close"
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-around pt-8 gap-8">
              <div className="flex flex-col items-center gap-3">
                <img
                  src={selectedMovie.image ? selectedMovie.image.medium : ""}
                  alt=""
                  className="w-48 h-64 rounded-md"
                />
                <p className="text-center">{selectedMovie.name}</p>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex gap-5 justify-center">
                  <div className="flex flex-col gap-[48px] mt-2">
                    <label htmlFor="name">Name *</label>
                    <label htmlFor="phone">Phone *</label>
                    <label htmlFor="date">Date *</label>
                    <label htmlFor="time">Time *</label>
                    <label htmlFor="seats">Seats *</label>
                  </div>
                  <div className="flex flex-col gap-[31px] mb-10 sm:mb-0">
                    <input
                      className="bg-[#303030] rounded-md p-2 outline-none"
                      type="text"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="bg-[#303030] rounded-md p-2 outline-none"
                      type="text"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={10}
                    />
                    <input
                      className="bg-[#303030] rounded-md p-2 outline-none"
                      type="date"
                      name="date"
                      id="date"
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                    <input
                      className="bg-[#303030] rounded-md p-2 outline-none"
                      type="time"
                      name="time"
                      id="time"
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="bg-[#303030] rounded-md p-2 outline-none"
                      type="number"
                      name="seats"
                      id="seats"
                      onChange={handleChange}
                      required
                      min={1}
                    />
                  </div>
                </div>
                <div className="sm:mt-10 flex justify-center sm:justify-end">
                  <PrimaryButton
                    text="BOOK TICKET"
                    height={"40px"}
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookingForm;
