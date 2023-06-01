import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-screen">
        <Navbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moviedetails" element={<MovieDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
