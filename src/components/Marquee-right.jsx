import React from 'react';
import TufLogo from '../assets/images/tuf-logo.png'; 
import HPLogo from '../assets/images/hp-logo.png'; 
import PrediatorLogo from '../assets/images/prediator-logo.png'; 
import DellLogo from '../assets/images/dell-logo.png'; 


import '../css/Marquee.css';

const MarqueeRight = () => {
  return (
    <div className="mt-28  w-52 h-[460px] rounded-md">
      <div className="flex mt-16 space-x-4 justify-around animate-marquee h-20">
        <img src={TufLogo} alt="ASUS Logo" className="w-50 h-auto" /> 
      </div>
      <div className="flex mt-10 space-x-4 justify-around animate-marquee h-20">
        <img src={HPLogo} alt="HP Logo" className="w-20 h-auto" /> 
      </div>
      <div className="flex mt-12 space-x-4 justify-around animate-marquee h-20" >
        <img src={PrediatorLogo} alt="Lenovo Logo" className="w-50 h-auto" /> 
      </div>
      <div className="flex  mt-6 space-x-4 justify-around animate-marquee h-20">
        <img src={DellLogo} alt="Lenovo Logo" className="w-42 h-auto"  /> 
      </div> 
    </div>
    
  );
};

export default MarqueeRight;
