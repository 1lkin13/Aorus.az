import React from 'react';
import AsusLogo from '../assets/images/asus-logo.png'; 
import LenovoLogo from '../assets/images/lenovo-logo.png'; 
import MsiLogo from '../assets/images/msi-logo.png'; 
import AcerLogo from '../assets/images/acer-logo.png'; 


import '../css/Marquee.css';

const MarqueeLeft = () => {
  return (
    <div className="mt-28   col-auto w-52 h-[460px]">
      <div className="flex mt-16  justify-around animate-marquee h-20">
        <img src={AsusLogo} alt="ASUS Logo" className="w-24 h-12" /> 
      </div>
      <div className="flex mt-10  justify-around animate-marquee h-20 ">
        <img src={LenovoLogo} alt="Lenovo Logo" className="w-36 h-auto" /> 
      </div>
      <div className="flex mt-12 justify-around animate-marquee h-20 ">
        <img src={MsiLogo} alt="Lenovo Logo" className="w-36 h-auto" /> 
      </div>
      <div className="flex  mt-10  justify-around animate-marquee h-20 ">
        <img src={AcerLogo} alt="Lenovo Logo" className="w-28 h-auto" /> 
      </div> 
    </div>
    
  );
};

export default MarqueeLeft;
