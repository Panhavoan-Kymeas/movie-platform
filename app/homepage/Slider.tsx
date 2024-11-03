"use client";

import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  backgroundColor: string;
}

export default function DemoSlider() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Slide One",
      tagline: "Welcome to Slide One",
      backgroundColor: "#FF5733",
    },
    {
      id: 2,
      title: "Slide Two",
      tagline: "Explore the features",
      backgroundColor: "#28A745",
    },
    {
      id: 3,
      title: "Slide Three",
      tagline: "Join us now",
      backgroundColor: "#007BFF",
    },
  ];

  return (
    <section style={{ height: '75vh' }}>
      <div className="h-screen">
        <ul className="h-full w-full" style={{ marginBottom: '0px', paddingBottom: '0px' }}>
          <Swiper
            navigation={true}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {/* Map through all item in slider*/}
            {slides.map(({ id, backgroundColor, tagline, title }) => (
              <SwiperSlide key={id} style={{ height: '75vh' }}>
                <div
                  className="h-full w-full absolute left-0 top-0"
                  style={{
                    backgroundColor: backgroundColor,
                  }}
                ></div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-40"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    {tagline && (
                      <p className="text-md sm:text-xl lg:text-3xl font-semibold">
                        {tagline}
                      </p>
                    )}
                    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold">
                      {title}
                    </p>
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