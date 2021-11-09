import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import '../styles/Slider.css';


SwiperCore.use([Navigation]);

export default function Carousel({ info, events }) {

  const swiperParams = {
    spaceBetween: 70,
    slidesPerView: 3,
    navigation: true,
    loop: true,
  };

  return (
    <Swiper
    breakpoints={{
      // when window width is >= 640px
      200: {
        width: 640,
        slidesPerView: 1,
      },
      740: {
        width: 840,
        slidesPerView: 2,
      }
    }}
    {...swiperParams}
      className="swiper-wrapper"
    >
      {info && info.map((info, index) => (
        <SwiperSlide
        key={index}
        style={
          { backgroundImage: `url(${info.img})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        onClick={ events[index] }
        className="slider"
        >
          {info.titulo}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
