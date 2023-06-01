import React, { useRef } from "react";
import Hero from "../Views/Hero";
import Feature from "../Views/Feature";
import Showtime from "../Views/Showtime";

const Home = () => {
  const showTimeRef=useRef(null);

  return (
    <div>
      <Hero siblingref={showTimeRef}/>
      <Feature />
      <Showtime ref={showTimeRef}/>
    </div>
  );
};

export default Home;
