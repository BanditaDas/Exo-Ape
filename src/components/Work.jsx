import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Work() {
  const [elems, setelems] = useState([
    {
      heading: "Columbia Pictures",
      subh: "Celebrating a Century of Cinema",
      img: "/img1.webp",
      vid: "/vid1.mp4"
    },
    {
      heading: "Cambium",
      subh: "Pioneering Sustainable Solutions",
      img: "/img2.webp",
      vid: "/vid2.mp4"
    },
    {
      heading: "Pixelflakes",
      subh: "Architectural marketing agency",
      img: "/img3.webp",
      vid: "/vid3.mp4"
    },
    {
      heading: "Studio D",
      subh: "Urban and Landscape Design",
      img: "/img4.webp",
      vid: "/vid4.mp4"
    }
  ])
  return (
    <div className='w-full relative'>
      <div className="max-w-screen-2xl h-full mx-auto px-5 sm:px-10 py-20">
        <div className="featured flex gap-2 ">
          <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <h1 className='font-[t300] text-md leading-tight sm:text-2xl'>Featured Projects</h1>
        </div>

        <h1 className='font-[t300] capitalize text-7xl sm:text-[15rem] sm:leading-none sm:tracking-tighter my-7 overflow-hidden'>
          <motion.span initial={{rotate: 90, y: "40%", opacity: 0}}
          whileInView={{rotate: 0, y: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{ease: [0.33, 1, 0.68, 1], duration: 0.5}}
           className='inline-block origin-left'>work</motion.span>
          </h1>

        <p className='font-[t300] text-lg leading-6 sm:text-2xl sm:w-[40%]'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
        <div className="elems sm:flex sm:flex-wrap sm:gap-5  sm:justify-center mt-10">
          {elems.map((itm, idx) => {
            return <div key={idx} className="elem w-full mt-10 sm:w-[48%]">
              <div className="vid w-full h-[70vw] sm:h-[50vw] relative overflow-hidden">
                <motion.img
                 data-scroll data-scroll-speed="-.5"
                 initial={{ opacity: 1 }}
                 whileHover={{opacity: 0}}
                 className='hidden sm:absolute sm:top-0 sm:left-0 sm:z-[2] sm:block w-full h-full object-cover' src={itm.img} alt="" />

                <video autoPlay muted loop className='block z-[1] w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover' src={itm.vid}></video>
              </div>
              <div className="mt-4">
                <h1 className='font-[t300] sm:text-xl'>{itm.heading}</h1>
                <p className='opacity-50 font-[t300] sm:text-xl'>
                {itm.subh}
                </p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Work