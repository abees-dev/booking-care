import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

const SwiperParent = ({ next, prev, children }) => {
   const breakPoint = {
      320: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      640: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      768: {
         slidesPerView: 4,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 4,
         spaceBetween: 20,
      },
   };

   return (
      <>
         <Swiper
            modules={[Navigation]}
            // loop={true}
            navigation={{
               prevEl: `.${next}`,
               nextEl: `.${prev}`,
            }}
            breakpoints={breakPoint}>
            {children}
         </Swiper>
      </>
   );
};

export default SwiperParent;
