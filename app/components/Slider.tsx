"use client";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import styles from './styles/Slider.module.css';

const Slider = () => {
  return (
    <Splide
      options={{
        type       : 'loop', // Enable looping
        perPage    : 1,
        perMove    : 1,
        pagination : true,
        arrows     : false, // Show arrows
        autoplay   : true,
        interval   : 5000, // Set autoplay interval to 5000 ms (5 seconds)
      }}
    >
      <SplideSlide>
        <img src="https://picsum.photos/2000/500?random=1" alt="First slide" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/2000/500?random=2" alt="Second slide" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://picsum.photos/2000/500?random=3" alt="Third slide" />
      </SplideSlide>
    </Splide>
  );
};

export default Slider;
