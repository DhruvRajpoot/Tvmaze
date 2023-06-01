import React from 'react'
import bg from "../Assets/herobg.jpg";
import PrimaryButton from '../Components/PrimaryButton';
import SecondaryButton from '../Components/SecondaryButton';

const Hero = () => {
  return (
    <div className='w-full relative'>
      <img src={bg} alt="" className='w-full h-[50vh] sm:h-[70vh] md:h-[90vh]'/>
      <div className='absolute bottom-0 w-full min-h-[35vh]' style={{background:"linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6279761904761905) 20%, rgba(0,0,0,0.7904411764705882) 35%, rgba(0,0,0,1) 64%)"}}/>
      <div className="absolute top-20 sm:top-0 ps-4 md:ps-24 w-full h-full flex flex-col gap-5 sm:justify-center z-10 text-white">
        <h1 className='text-4xl sm:text-6xl md:text-7xl font-extrabold'>WELCOME TO <br/> MOVIETIME</h1>
        <p className='text-sm w-4/5 sm:text-lg text-red-500'>"Unleash Your Imagination: Dive into a World of Captivating Cinema"</p>
        <div className='flex gap-2 sm:gap-4'>
            <div><PrimaryButton text='Explore' /></div>
            <div><SecondaryButton text='Watch Trailer' /></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
