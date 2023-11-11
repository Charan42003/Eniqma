import React from 'react'
import timeline from '/src/assets/timeline-img.png'

function Timeline() {
  return (
    <>
    <div className='min-h-[100vh] py-20'>
        <div className='timeline-section'>
            <h2 className='text-[18px] font-bold text-center'>Timeline</h2>
            <h3 className='text-[40px] font-bold text-center'>RoadMap of the Eniqma Timeline</h3>
        </div>
        <div className="timeline-img">
            <img src={timeline} alt="" className='w-full h-auto'/>
        </div>
    </div>
    </>
  )
}

export default Timeline