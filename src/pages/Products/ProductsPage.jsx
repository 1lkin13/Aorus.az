import React from 'react';
import Slide from "../../components/slide.jsx";
import MarqueeLeft from "../../components/Marquee-left.jsx"; 
import MarqueeRight from "../../components/Marquee-right.jsx"; 


export default function ProductsPage() {
  return (
    <div className="flex  mt-[19px] justify-center items-center h-screen bg-black">
      <div className="w-1/3 h-full flex justify-around">
        <MarqueeLeft /> 
      </div>
      <div className="w-[800px] h-auto relative">
        <div className=" inset-0 flex items-center justify-center">
          <Slide /> 
        </div>
      </div>
      <div className="w-1/3 h-full flex justify-around">
        <MarqueeRight /> 
      </div>
    </div>
  );
}
