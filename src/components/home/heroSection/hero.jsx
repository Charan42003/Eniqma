import React from 'react'
import earth from '../../../assets/globe1.png'

function Hero() {
  return (
    <>
    <div className="min-h-[100vh] max-h-[100vh] overflow-hidden relative hero-section">
        <div className="hero-shadow object-contain min-h-[100vh] max-h-[100vh] w-full">
        </div>
        <div className="relative z-10 mt-14  flex flex-col items-center  hero-content">
          <h1 className="text-white text-[60px] font-bold">
            Unleash your creativity at <br />
            <span className="">
              The East Point - Eniqma
            </span>
          </h1>
          <p className='text-grey text-[20px] w-[60%] text-center mt-4'>
          Where Geeks And Prodigies create Magic
          </p>
          <div className="mt-5">
            <button className="font-bold text-[20px] tracking-widest !border-transparent register-btn">
              Register Now
            </button>
            {/* <button className="font-bold text-[20px] tracking-widest !border-transparent register-btn">
              Join Community
            </button> */}
          </div>
        </div>
        <img src={ earth } alt="" className='hero-earth' />
    </div>

    </>
  )
}

export default Hero