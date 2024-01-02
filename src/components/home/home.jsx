import React from 'react'
import Nav from './navbarSection/nav'
import Hero from './heroSection/hero'
import About from './aboutSection/About'
import Timeline from './timelineSection/Timeline'
import Tracks from './tracksSection/Tracks'
import Sponsors from './sponsorsSection/Sponsors'
import FaqSection from './faqSection/FaqSection'
import Footer from './footer/footer'


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

      {/* Sponsors Section  */}
      <Sponsors />
      
      {/* FAQ's Section  */}
      <FaqSection />
      
      {/* Footer Section  */}
      <Footer />

    </div>
    </>
  )
}

export default Home