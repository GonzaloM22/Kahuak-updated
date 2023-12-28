"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Trabajo from './trabajo';

const Carousel = ({ works }) => {


  return (
    <div>
      <Swiper
        className="-z-50"
        autoplay={{ delay: 2500 }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          610: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          760: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1240: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {works?.map((work) => (
          <SwiperSlide key={work.id} className="-z-50">
            <Trabajo work={work} className="-z-50" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
