"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  backgroundColor: string;
}

export default function DemoSlider() {
  const slides: Slide[] = [
    {
      id: 1,
      backgroundColor: "#FF5733",
    },
    {
      id: 2,
      backgroundColor: "#28A745",
    },
    {
      id: 3,
      backgroundColor: "#007BFF",
    },
  ];

  return (
    <section className="lg:h-[75vh] md:h-[45vh] xs:h-[35vh]">
      <div className="h-full">
        <ul className="h-full w-full mb-0 pb-0">
          <Swiper
            navigation={true}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {slides.map(({ id, backgroundColor}) => (
              <SwiperSlide key={id} className="lg:h-[75vh] md:h-[45vh] xs:h-[35vh] relative">
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: backgroundColor }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="lg:h-[75vh] md:h-[45vh] xs:h-[35vh]">
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}
