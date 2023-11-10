import React from 'react'
import genAI from '../../../assets/GenAI.png'
import blockchain from '../../../assets/blockchain-web3.jpg'
import cyberSecurity from '../../../assets/cyber-security.jpg'
import openInnovation from '../../../assets/open-innovation.jpg'


function Tracks() {
  return (
    <>
      <div className="tracks-section py-20">
        <div className="container mx-auto flex flex-col justify-center items-center tracks-section-head">
          <h2 className="text-[18px] font-bold">Tracks</h2>
          <h3 className='text-[40px] font-bold'>Lorem ipsum dolor sit amet</h3>

        </div>

        <div className='container mx-auto flex flex-col items-start tracks-section-body'>
        <div className="tracks-section-card">
          <h3>Generative AI</h3>
          <div className="tracks-img">
            <img src={genAI} alt="" />
          </div>
          <p>01</p>
          
        </div>

          
          <div className="tracks-section-card">
            <h3>Blockchain / Web3</h3>
            <div className="tracks-img">
            <img src={blockchain} alt="" />
          </div>
            <p>02</p>
          </div>
          <div className="tracks-section-card">
            <h3>Cyber Security</h3>
            <div className="tracks-img">
            <img src={cyberSecurity} alt="" />
          </div>
            <p>03</p>
          </div>
          <div className="tracks-section-card">
            <h3>Open Innovation</h3>
            <div className="tracks-img">
            <img src={openInnovation} alt="" />
          </div>
            <p>04</p>
          </div>

        </div>
      </div>

    </>
  )
}

export default Tracks