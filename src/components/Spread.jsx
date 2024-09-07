import { motion } from 'framer-motion'
import React from 'react'

function Spread() {
    return (
        <div className='w-full bg-white py-20'>
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-20 flex items-center justify-center flex-col">
                <div className="featured flex items-center justify-center gap-3 ">
                    <svg data-v-669b4a84="" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 sm:w-6"><path data-v-669b4a84="" d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path></svg>
                    <h1 className='font-[t300] text-sm leading-tight sm:text-2xl pt-1'>In the media</h1>
                </div>
                <div className="text pt-10 font-[t300]  text-center w-2/3">
                    <h1 className='text-6xl tracking-tight sm:text-[10rem] overflow-hidden'>
                        {["Spread","the News"].map((itm, idx)=>{
                            return <motion.span initial={{ rotate: 90, y: "40%", opacity: 0 }}
                            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.5 }}
                            className='inline-block origin-left' key={idx}>{itm}</motion.span>
                        })}
                        
                    </h1>
                    
                    <p className='w-2/3 mx-auto py-5 text-md sm:text-lg'>Find out more about our work on these leading design and technology platforms.</p>
                    <a href="#" className='text-sm border-b-[.3px] border-zinc-900 sm:text-lg'>
                        Browse all news
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Spread