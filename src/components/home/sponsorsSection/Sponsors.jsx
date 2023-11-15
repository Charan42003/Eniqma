import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Grid, Autoplay } from 'swiper/modules';
import logo from '../../../assets/spons.png'
import SwiperComponent from './swiperComponent';


function Sponsors() {
  return (
    <>
    <section className='mx-auto relative sponsors-wrapper overflow-hidden'>
        {/* <div className="sponsors-overlay"></div>
        <div className="sponsors-head">
            <h2 className='text-[18px] font-bold text-center'>Sponsors</h2>
            <h3></h3>
        </div> */}
      <div className='hero-shadow object-contain min-h-[100vh] max-h-[100vh] w-full sponsor_mask' />
        
      <SwiperComponent />

    </section>

    
    </>
  )
}

export default Sponsors