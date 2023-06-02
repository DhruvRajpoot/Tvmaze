import React, { useState } from "react";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState(
    JSON.parse(localStorage.getItem("ticketData")) || []
  );
  const formatDate = (date) => {
    const formattedDate = new Date(date)
      .toDateString()
      .split(" ")
      .slice(1)
      .join(" ");
    return formattedDate;
  };

  const formateTime = (time) => {
    const [hour, minute] = time.split(":");
    const suffix = hour < 12 ? "AM" : "PM";
    const convertedHour = hour % 12 || 12;
    return `${convertedHour}:${minute} ${suffix}`;
  };

  return (
    <div className="p-2 xsm:p-5">
      {orderHistory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {orderHistory.map((item, index) => {
            return (
              <div
                className="bg-[#15151c] rounded-md p-3 xsm:p-4 sm:p-5 flex gap-3 xsm:gap-5"
                key={index}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-28 sm:w-36 h-28 sm:h-36 rounded-md"
                />
                <div className="flex flex-col">
                  <p className="text-xl sm:text-2xl font-semibold tracking-wider text-[#ffd3d3] pb-1">
                    {item.moviename}
                  </p>
                  <p className="text-xs xsm:text-sm sm:text-base">
                    {formatDate(item.date)}
                  </p>
                  <p className="text-xs xsm:text-sm sm:text-base">
                    {formateTime(item.time)}
                  </p>
                  <p className="text-xs xsm:text-sm sm:text-base">Seats: {item.seats}</p>
                  <p className="text-xs xsm:text-sm sm:text-base">Name : {item.name}</p>
                  <p className="text-xs xsm:text-sm sm:text-base">Phone : {item.phone}</p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-center text-xl sm:text-2xl">No Orders Found</h1>
      )}
    </div>
  );
};

export default OrderHistory;
