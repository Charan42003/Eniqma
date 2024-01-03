import React from 'react';
import logo from '../../../assets/logo.png'

function Footer() {
  return (
    <>
    <section className="py-10 px-[4%]">
      <div className="flex justify-around items-start flex-wrap footer-wrap">
        
        <div className="p-[40px]">
          <img src={ logo } alt="" className='w-[250px]' />

          <div className="">
            <h2 className="mb-10 mt-5 text-[25px] font-bold bg-gradient-to-t from-primary to-blue text-[transparent] bg-clip-text" >Where Geeks And Prodigies create Magic</h2>
          </div>

          <div className="mt-5 mb-10 flex flex-wrap justify-left items-center gap-5">
            <button className=" hover:border border-primary text-[15px] tracking-widest register-btn hero-btn">
              Register Now
            </button>
            <button className=" text-[15px] tracking-widest hero-btn community-btn">
                Join Community
            </button>
          </div>

          <div className="flex justify-start gap-10">
            <a href='#' className='p-4 w-[60px] flex justify-center text-[25px] bg-[#343549] cursor-pointer rounded-2xl group'>
              <i class="fa-brands fa-x-twitter text-blue group-hover:text-[#fff]"></i>
            </a>
            <a href='#' className='p-4 w-[60px] flex justify-center text-[25px] bg-[#343549] cursor-pointer rounded-2xl group'>
              <i class="fa-brands fa-instagram text-blue group-hover:bg-gradient-to-t from-[#f9ce34] to-[#ee2a7b] group-hover:text-[transparent] group-hover:bg-clip-text"></i>
            </a>
            <a href='#' className='p-4 w-[60px] flex justify-center text-[25px] bg-[#343549] cursor-pointer rounded-2xl group'>
              <i class="fa-brands fa-linkedin text-blue group-hover:text-[#0A66C2]"></i>
            </a>
            <a href='#' className='p-4 w-[60px] flex justify-center text-[25px] bg-[#343549] cursor-pointer rounded-2xl group'>
              <i class="fa-brands fa-facebook text-blue group-hover:text-[#0866FF]"></i>
            </a>
          </div>
        </div>

        <div className=' aboutSection-image p-2 w-[fit-content]'> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13073.507307672213!2d77.71778548925613!3d13.049863228213686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae104db6325bff%3A0x95487852730b0803!2sEast%20Point%20College%20of%20Higher%20Education!5e0!3m2!1sen!2sin!4v1700030513354!5m2!1sen!2sin" className='w-[300px] md:w-[500px] h-[400px] map' style={{ border: 0, borderRadius: '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer