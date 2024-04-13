import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/slide.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.jpg";
import slide9 from "../assets/images/slide9.jpg";

export default function Slide() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper max-h-[450px] w-full sm:mt-16 lg:mt-0 "
      >
        <SwiperSlide>
          {" "}
          <img src="https://i.redd.it/ltdf5jksp36b1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://global.aorus.com/upload/Admin/images/01(4).jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://global.aorus.com/upload/Admin/images/01(4).jpg"
            alt=""
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
