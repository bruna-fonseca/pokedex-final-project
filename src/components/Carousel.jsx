import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Scrollbar, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import '../styles/Slider.css';


SwiperCore.use([Navigation, Scrollbar, Pagination]);

export default function Carousel({ info, events }) {

  const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 2,
    scrollbar: true,
    pagination: true,
    navigation: false,
    loop: true,
  };

  return (
      <Swiper
        style={{ width: '100%' }}
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
            <span style={{ width: '250px' }}>{info.titulo}</span>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
