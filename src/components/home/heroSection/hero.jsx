import React from 'react'
import earth from '../../../assets/earth.jpg'

function Hero() {
  return (
    <>
    <div className="min-h-[100vh] max-h-[100vh] overflow-hidden relative hero-section">
        <div className="hero-shadow object-contain min-h-[100vh] max-h-[100vh] w-full">
        </div>
        <div className="relative z-10 mt-14  flex flex-col items-center  hero-content">
          <h1 className="text-white text-[70px] font-bold">
            Trending 
            <span className="">
              Title
            </span>
          </h1>
          <p className='text-grey w-[60%] text-center mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-5">
            <button className="font-bold text-[20px] tracking-widest !border-transparent register-btn">
              Register Now
            </button>
          </div>
        </div>
        <img src={ earth } alt="" className='hero-earth' />
    </div>

    </>
  )
}

export default Hero