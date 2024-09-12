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
        <img src={"/220830-pakistan-floods-mb-0921-3e0010.webp"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/skynews-pakistan-floods_5878675.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/202208asia_pakistan_family_floods.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/20220901-pakistan_floods_3-nyt-ac.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={"/gettyimages-1242738982_custom-891fb344100d33320bbd8f505549f23c4b8ec591.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide>
      {/* <SwiperSlide>
        <img src={"/3.jpg"} className="w-full object-cover h-[400px]" />
      </SwiperSlide> */}
      
    </Swiper>
  );
}
