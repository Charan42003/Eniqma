import React from 'react'
import earth from '../../../assets/globe.png'

function Hero() {
  return (
    <>
    <section className="min-h-[100vh] max-h-[100vh] overflow-hidden relative hero-section">
        <div className="hero-shadow object-contain min-h-[100vh] max-h-[100vh] w-full">
        </div>
        <div className="relative z-10 mt-14  flex flex-col items-center  hero-content">
          <h1 className="text-white text-[60px] font-bold ">
            <section style={{ textShadow: '0 0 10px #73C9EC'}}>
              Unleash your creativity at <br />
            </section>
            <span className="">
              The East Point - Eniqma
            </span>
          </h1>
          <p className='text-grey text-[20px] w-[60%] text-center mt-4'>
          Where Geeks And Prodigies create Magic
          </p>
          <div className="mt-5 px-4 justify-center items-center flex flex-wrap gap-5">
            <button className=" text-[15px] tracking-widest register-btn hero-btn">
              Register Now
            </button>
            <button className=" !text-white text-[15px] tracking-widest hero-btn community-btn">
                Join Community
            </button>
          </div>
        </div>
        <img src={ earth } alt="" className='hero-earth' />
    </section>

    </>
  )
}

export default Hero