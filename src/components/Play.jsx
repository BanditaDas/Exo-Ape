import gsap, {Power4, ScrollTrigger} from 'gsap/all'
import React, { useEffect, useRef } from 'react'

function Play() {
  const parent = useRef(null)
  const vid = useRef(null)
  const play = useRef(null)
  const reel = useRef(null)
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger: parent.current,
        top: "0 0",
        pin: true,
        scrub: 1,
      },
    })
    tl
    .to(vid.current,{
      width: "117%",
      height: "117%",
      ease: Power4.easeInOut,
    },"a")
    .to(play.current,{
      x: "-100%",
      ease: Power4,
    },"a")
    .to(reel.current,{
      x: "100%",
      ease: Power4,
    },"a")
  })
  return (
    <div ref={parent} className='w-full h-screen overflow-hidden relative bg-zinc-950'>

      <div ref={vid} className="w-52 overflow-hidden aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[30vw]">
        <video autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40' src="./public/playreel.mp4"></video>
      </div>

      <div className="overlay absolute w-full h-full  text-white flex flex-col justify-between py-20">
        <div className="featured flex items-center justify-center gap-3 ">
          <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
          <h1 className='font-[t300] text-sm leading-tight sm:text-2xl pt-1'>Work in motion</h1>
        </div>
        <h1 className='w-full flex justify-center gap-2 items-center font-[t300] sm:gap-32'>
          <div ref={play} className="text-5xl sm:text-9xl font-light">Play</div>
          <div ref={reel} className="text-5xl sm:text-9xl font-light">Reel</div>
        </h1>
        <p className='text-center text-sm px-7 sm:text-md '>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
      </div>
    </div>
  )
}

export default Play