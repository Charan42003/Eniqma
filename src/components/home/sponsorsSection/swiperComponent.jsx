import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Autoplay } from 'swiper/modules';
import logo from '../../../assets/spons.png'

function SwiperComponent() {
  
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(()=>{
    if(window.innerWidth < 450) {
      setSlidesPerView(2)
    }
  }, []);

  return (
    <>
    <div className="w-full h-auto">
        <Swiper
          slidesPerView={slidesPerView}
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
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          <SwiperSlide style={{width: 'auto', height: 'auto', objectFit: 'contain'}}>
              <img src={ logo } alt="" className='w-full h-full overflow-hidden' />
          </SwiperSlide>
          
        </Swiper> 
      </div>
    </>
  )
}

export default SwiperComponent