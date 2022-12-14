import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Trabajo from './trabajo';

const Carousel = ({ trabajos }) => {
  SwiperCore.use([Autoplay, Navigation]);

  return (
    <div>
      <Swiper
        autoplay={{ delay: 3000 }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
        {trabajos.map((trabajo) => (
          <SwiperSlide key={trabajo.codigo}>
            <Trabajo trabajo={trabajo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
