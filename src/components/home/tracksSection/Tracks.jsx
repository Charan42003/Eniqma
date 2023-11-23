import React from 'react'
// import genAI from 'https://imageio.forbes.com/specials-images/imageserve/650945e2810848cde5016621/What-Is-Generative-AI--A-super-Simple-Explanation-Anyone-Can-Understand/960x0.jpg?height=399&width=711&fit=bounds'
// import blockchain from 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png'
// import cyberSecurity from 'https://cdn.sanity.io/images/tlr8oxjg/production/bdb77d61d1ef7dc459bf17ae010658476c00d420-1456x816.png'
// import openInnovation from 'https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2022/10/Feature-image-%E2%80%93-Throwback-to-our-top-INNOVATIVE-hackathons-1.png'
import genAI from '../../../assets/globe.png'
import blockchain from '../../../assets/globe.png'
import cyberSecurity from '../../../assets/globe.png'
import openInnovation from '../../../assets/globe.png'


function Tracks() {

  const mouseMoving = (e, card) => {
    let xAxis = -(window.innerWidth/2 - e.pageX) /20;
    // let yAxis = (window.innerHeight/2 - e.pageY) / 20;
    let yAxis = 25
    let yAxistran = (window.innerHeight/2 - e.pageY) / 70;
    document.querySelector(`.${card}`).style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg) `
    // document.querySelector(`.${card}`).style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg) translateX(${xAxis}px) translateY(${yAxistran}px)`
    // document.querySelector(`.${card}`).style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`
    // console.log(`XAxis: ${xAxis} || YAxis: ${yAxis} container : ${container}`)
  }

  const mouseLeft = (e, card) => {
    document.querySelector(`.${card}`).style.transition = 'all 0.5s ease';
    document.querySelector(`.${card}`).style.transform = 'rotateY(0deg) rotateX(0deg)'
  }

  const mouseEntered = (e, card) => {
    document.querySelector(`.${card}`).style.transition = 'none'
  }


  return (
    <>
      <section className="tracks-section py-20" id='tracks'>
        <div className="container mx-auto flex flex-col justify-center items-center tracks-section-head">
          <h2 className="text-[18px] font-bold">Tracks</h2>
          <h3 className='text-[40px] font-bold px-4 lg:px-0 text-center'>Lorem ipsum dolor sit amet</h3>

        </div>

        <div className='container mx-auto flex flex-col items-start tracks-section-body'>

          <div className="tracks-section-card" 
              onMouseMove={ (e)=> mouseMoving(e, "genAI")} 
              onMouseLeave={ (e) => mouseLeft(e, "genAI") } 
              onMouseEnter={ (e) => mouseEntered(e, "genAI") }
          >
            <h3>Generative AI</h3>
            <div className="tracks-img genAI">
              <img src={"https://imageio.forbes.com/specials-images/imageserve/650945e2810848cde5016621/What-Is-Generative-AI--A-super-Simple-Explanation-Anyone-Can-Understand/960x0.jpg?height=399&width=711&fit=bounds"} alt="" />
            </div>
            <p>01</p>
          </div>

          <div className="tracks-section-card" 
              onMouseMove={ (e)=> mouseMoving(e, "blockchain")} 
              onMouseLeave={ (e) => mouseLeft(e, "blockchain") } 
              onMouseEnter={ (e) => mouseEntered(e, "blockchain") }
          >
            <h3>Blockchain / Web3</h3>
            <div className="tracks-img blockchain">
              <img src={'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png'} alt="" />
            </div>
            <p>02</p>
          </div>

          <div className="tracks-section-card" 
              onMouseMove={ (e)=> mouseMoving(e, "cyberSecurity")} 
              onMouseLeave={ (e) => mouseLeft(e, "cyberSecurity") } 
              onMouseEnter={ (e) => mouseEntered(e, "cyberSecurity") }
          >
            <h3>Cyber Security</h3>
            <div className="tracks-img cyberSecurity">
              <img src={"https://cdn.sanity.io/images/tlr8oxjg/production/bdb77d61d1ef7dc459bf17ae010658476c00d420-1456x816.png"} alt="" />
            </div>
            <p>03</p>
          </div>

          <div className="tracks-section-card" 
              onMouseMove={ (e)=> mouseMoving(e, "openInnovation")} 
              onMouseLeave={ (e) => mouseLeft(e, "openInnovation") } 
              onMouseEnter={ (e) => mouseEntered(e, "openInnovation") }
          >
            <h3>Open Innovation</h3>
            <div className="tracks-img openInnovation">
              <img src={"https://blog-c7ff.kxcdn.com/blog/wp-content/uploads/2022/10/Feature-image-%E2%80%93-Throwback-to-our-top-INNOVATIVE-hackathons-1.png"} alt="" />
            </div>
            <p>04</p>
          </div>

        </div>
      </section>

    </>
  )
}

export default Tracks