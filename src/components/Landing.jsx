import { motion } from 'framer-motion'
import { Expo, Power4 } from 'gsap/all'
import React from 'react'

function Landing() {
  return (
    <div className='relative w-full h-[150vh] sm:h-[250vh]'>
      <div className="pic w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1" className='w-full h-full object-cover' src="./public/bg.webp" alt="" />
      </div>
      <div className="w-full absolute top-0">
        <div className=" h-full text max-w-screen-2xl mx-auto px-5 sm:px-20 text-white">
          <div className="para mt-72 sm:mt-96">

            {["Global digital design studio partnering","with brands and businesses that create","exceptional experiences where people","live, work, and unwind."].map((itm,idx)=>{
                return <p key={idx} className='text-lg font-[t300] sm:text-3xl  overflow-hidden'>
                <motion.span
                 initial={{ rotate: 90,y: "100%",opacity: 0}}
                 animate={{ rotate: 0, y: 0, opacity: 1 }} transition={{ ease: Expo.easeInOut, duration: 1.7 , delay: idx*.2}}
                  className='inline-block origin-left' >{itm}</motion.span>
              </p>
            })}
          </div>
          <div className="headings mt-3 sm:mt-10">
            {["Digital","Design","Experience"].map((itm,idx)=>{
              return <h1 key={idx} className='text-6xl font-[t300] tracking-tight leading-none sm:text-[17vw] overflow-hidden'>
              <motion.span
                   initial={{ rotate: 90,y: "100%",opacity: 0}}
                   animate={{ rotate: 0, y: "-10%", opacity: 1 }} transition={{ ease: Expo.easeInOut, duration: 1.7 ,delay:1+idx*.2}}
                    className='inline-block origin-left' >{itm}</motion.span>
              </h1>
            })}
          </div>
          <div className="para2 mt-10 sm:mt-20">
            <p className='font-[t300] sm:w-1/2 sm:text-2xl'>We help experience-driven companies thrive by making their audience feel the refined intricacies of their brand and product in the digital space. Unforgettable journeys start with a click.</p>
          </div>
          <a href="#" className='border-b-[.3px] border-zinc-100 mt-10 inline-block font-[t300] text-md sm:text-xl'>The Studio</a>
        </div>
      </div>
    </div>
  )
}

export default Landing