import React from 'react'
import timeline from '/src/assets/timeline-img.png'

function Timeline() {
  return (
    <>
    <section className='min-h-[100vh] flex justify-center items-center py-10'>
      <div>
        <div className='timeline-section'>
          <div className="about-section">
            <h2 className='text-[18px] font-bold text-center'>Timeline</h2>
          </div>
            <h3 className='text-[40px] font-bold text-center' style={{ textShadow: '0 0 10px #73C9EC'}}>RoadMap of the Eniqma Timeline</h3>
        </div>
        <div className="timeline-img">
            <img src={timeline} alt="" className='w-full h-auto'/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Timeline