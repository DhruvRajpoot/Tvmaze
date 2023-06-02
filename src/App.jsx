import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Navbar from "./Components/Navbar";
import OrderHistory from "./Pages/OrderHistory";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-black text-white">
        <Navbar />
        <div className="w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetails" element={<MovieDetails />} />
            <Route path="/orderhistory" element={<OrderHistory/>} />
            <Route path="*" element={<h1 className="p-4 text-red-500">404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
