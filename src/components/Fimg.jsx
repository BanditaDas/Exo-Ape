import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

function Fimg() {
    const parent = useRef(null)
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const forth = useRef(null)

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                start: "0 90%",
                scrub: 1,
            }
        })
        tl.to(first.current,{
            x: "50%",
            ease: Power4
        }, "a")
        tl.to(second.current,{
            x: "-50%",
            ease: Power4
        }, "a")
        tl.to(third.current,{
            x: "-50%",
            ease: Power4
        }, "a")
        tl.to(forth.current,{
            x: "50%",
            ease: Power4
        }, "a")
    })

    return (
        <div ref={parent} className='w-full h-[75vh] sm:h-[150vh] bg-white flex items-center justify-center overflow-hidden'>
            <div className="w-[37%] h-2/4 relative sm:w-[25%] sm:h-[75%]">
                <div ref={first} className="absolute w-[4rem] h-[6rem]  -right-1/3 top-5 sm:w-[13rem] sm:h-[18rem] sm:-right-[12vw]">
                    <img className='w-full h-full object-cover' src="./public/f2.webp" alt="" />
                </div>
                <div ref={second} className="absolute aspect-video w-[8rem] h-[5rem] -left-2/3 top-1/4 sm:w-[25rem] sm:h-[15rem] sm:-left-[20vw]">
                    <video autoPlay muted loop className='w-full h-full object-cover' src="./public/f3.mp4"></video>
                </div>
                <div ref={third} className="absolute w-[8.5rem] h-[5.5rem] -left-32 top-52 sm:w-[25rem] sm:h-[17rem] sm:-left-[25vw] sm:top-[40vw]">
                <img className='w-full h-full object-cover' src="./public/f4.webp" alt="" />
                </div>
                <div ref={forth} className="absolute  bg-red-500 aspect-video w-[8.5rem] h-[9rem] -right-[32vw] top-52 sm:w-[25rem] sm:h-[30rem] sm:-right-[27vw] sm:top-[45vw]">
                    <video autoPlay muted loop className='w-full h-full object-cover' src="./public/f5.mp4"></video>
                </div>
                <img className='w-full h-full object-cover' src="./public/f1.webp" alt="" />
            </div>
        </div>
    )
}

export default Fimg