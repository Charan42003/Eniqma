import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Autoplay } from 'swiper/modules';


function Sponsors() {
  return (
    <>
    <div className='container mx-auto sponsors-wrapper overflow-hidden'>
        <div className="sponsors-overlay"></div>
        <div className="sponsors-head">
            <h2 className='text-[18px] font-bold text-center'>Sponsors</h2>
            <h3></h3>
        </div>

      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
        modules={[Grid, Autoplay]}
        className="mySwiper"

       
      >
        <SwiperSlide>
            <img src="https://freevetis.com/monkeymo/wp-content/uploads/sites/16/2022/02/845151.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>

    
    </>
  )
}

export default Sponsors