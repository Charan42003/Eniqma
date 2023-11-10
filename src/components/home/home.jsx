import React from 'react'
import Nav from './navbarSection/nav'
import Hero from './heroSection/hero'
import About from './aboutSection/About'
import Timeline from './timelineSection/Timeline'
import Tracks from './tracksSection/Tracks'
import Sponsors from './sponsorsSection/Sponsors'

function Home() {
  return (
    <>
    <div className="container-custom mx-auto">
        {/* Nav bar  */}
        <Nav />

        {/* Hero Section  */}
        <Hero />

      {/* About Section */}
      <About />

      {/* Time Line */}
      <Timeline />

      {/* Tracks Section */}
      <Tracks />

      <Sponsors />
    </div>
    </>
  )
}

export default Home