import React from 'react'
import Nav from './navbarSection/nav'
import Hero from './heroSection/hero'

function Home() {
  return (
    <>
    <div className="container-custom mx-auto">
        {/* Nav bar  */}
        <Nav />

        {/* Hero Section  */}
        <Hero />
    </div>
    </>
  )
}

export default Home