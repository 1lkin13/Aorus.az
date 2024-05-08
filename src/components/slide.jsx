import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/slide.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


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
          <img src="https://cdn.mos.cms.futurecdn.net/rFGH9GALVrnscxkuzfEkfW-1200-80.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.ytimg.com/vi/3CA1FLZAE18/maxresdefault.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/734546229001/869bfaca-9962-4ad1-892e-61110c5407c9/2212939c-5b90-4be2-9cee-673c290b8a1a/1920x1080/match/image.jpg"
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
