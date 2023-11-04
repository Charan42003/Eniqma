import React from 'react'

function About() {
  return (
    <>
    <div className="container flex mx-auto pt-11 pb-11 w-full justify-between">
        <div className='w-[48%] flex justify-center items-center'>
        <div className=' aboutSection-image'>
            <img src="https://freevetis.com/monkeymo/wp-content/uploads/sites/16/2022/02/8441513.png" width={'350px'} alt="" />
        </div>
        </div>
        <div className="flex flex-col justify-center items-start mt-10 w-[48%] about-section">
            <h2 className="text-[18px] font-bold">
            About Eniqma
            </h2>

            <h3 className='text-[40px] font-bold'>Lorem ipsum dolor sit amet</h3>
            <p className='text-grey text-[16px] text-left mt-4 w-4/5'>
            The East Point - Eniqma is a community of students who are passionate about technology and are willing to learn and grow together. We are a group of students who are passionate about technology and are willing to learn and grow together. We are a group of students who are passionate about technology and are willing to learn and grow together.
            </p>
            <button className=" text-[15px] mt-5 tracking-widest register-btn hero-btn community-btn">
              Join Community
            </button>
        </div>
    </div>
    
    </>
  )
}

export default About