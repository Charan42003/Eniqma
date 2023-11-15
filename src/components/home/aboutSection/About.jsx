import React from 'react'
import aboutImg from '../../../assets/about.png'

function About() {
  return (
    <>
    <section className="container flex mx-auto pt-11 pb-11 w-full justify-between">
        <div className='w-[48%] flex justify-center items-center'>
        <div className=' aboutSection-image'>
            <img src={ aboutImg } width={'350px'} alt="" />
        </div>
        </div>
        <div className="flex flex-col justify-center items-start mt-10 w-[48%] about-section">
            <h2 className="text-[18px] font-bold">
            About Eniqma
            </h2>

            <h3 className='text-[40px] font-bold'>Where Geeks And Prodigies create Magic</h3>
            <p className='text-grey text-[16px] text-left mt-4 w-4/5'>
            The East Point - Eniqma is a community of students who are passionate about technology and are willing to learn and grow together. We are a group of students who are passionate about technology and are willing to learn and grow together. We are a group of students who are passionate about technology and are willing to learn and grow together.
            </p>
            <button className=" text-[15px] mt-5 tracking-widest register-btn hero-btn community-btn">
              Join Community
            </button>
        </div>
    </section>
    
    </>
  )
}

export default About