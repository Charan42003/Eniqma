import React from 'react'
import aboutImg from '../../../assets/Hackathon-about.png'

function About() {
  return (
    <>
    <section className="container mx-auto py-11">
      <div className="flex flex-col-reverse gap-[30px] lg:flex-row justify-center items-center">
        <div className='w-[48%] flex justify-center items-center'>
        <div className=' aboutSection-image'>
            <img src={ aboutImg } width={'350px'} className="rounded-[20px]" />
        </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:items-start mt-10  lg:w-[48%] about-section">
            <h2 className="text-[18px] font-bold">
              About Eniqma
            </h2>
            <h3 className='text-[35px] leading-[40px] my-4 md:text-[40px] font-bold text-center lg:text-left px-4 lg:px-0'>Where Geeks And Prodigies create Magic</h3>
            <p className='text-grey text-[16px] text-center lg:text-left mt-4 w-4/5'>
              The East Point - Eniqma is a community of students who are passionate about technology and are willing to learn and grow together. We are a group of students who are passionate about technology and are willing to learn and grow together. We are a group of students who are passionate about technology and are willing to learn and grow together.
            </p>
            <button className=" text-[15px] mt-5 tracking-widest register-btn hero-btn community-btn">
              Join Community
            </button>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About