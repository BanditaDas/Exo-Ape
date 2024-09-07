import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Play from './components/Play'
import Fimg from './components/Fimg'
import Spread from './components/Spread'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full' >
      <Navbar />
      <Landing />
      <Work />
      <Play />
      <Fimg />
      <Spread />
      <Footer />
    </div>
  )
}

export default App