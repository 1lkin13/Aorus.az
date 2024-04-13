import React, { useState, useEffect } from "react";
import CategoryList from "./categorylist";
import Slide from "./slide";

const Sectionone = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  // bg-gradient-to-r from-[#020004] via-[#161223] to-[#0a1d1b]
  return (
    <div className="lg:flex-row-reverse lg:flex bg-gradient-to-l from-slate-900 to-purple-900">
      <div className={`order-1 m-auto  w-auto lg:w-4/6 lg:pt-24 lg:mr-10`}>
        <Slide className={`w-full ${isMobile ? "mx-auto" : ""}`} />
      </div>
      <div className={`h-[100dvh] lg:w-2/6 pt-4 lg:pt-24 order-1 lg:order-2`}>
        <CategoryList />
      </div>
    </div>
  );
};

export default Sectionone;
