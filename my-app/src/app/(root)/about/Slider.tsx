"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        
      }}
      autoplay={{delay: 2200, pauseOnMouseEnter: true}}
      modules={[Pagination, Autoplay]}
      className="mySwiper rounded-xl"
      onSlideChange={(e) => {
        console.log(e, ' hama')
      }}
      onChange={(e) => {
        console.log(e, 'hama ')
      }}
    >
      <SwiperSlide >
        <img src={"/1.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/2.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/3.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/1.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/2.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/3.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      
    </Swiper>
  );
}
