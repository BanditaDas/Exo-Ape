import React from 'react'

function Footer() {
    return (
        <div className='relative w-full h-[75vh] bg-zinc-950 overflow-hidden font-[t300] sm:h-[100vh]'>
            <div className="con w-full text-[#E0CCBB] px-7 py-10  absolute z-[99] sm:py-20 sm:px-20">
                <h1 className='text-6xl sm:text-[10rem]'>Our</h1>
                <h1 className='text-6xl sm:text-[10rem]'>Story</h1>
                <p className='text-lg py-7 opacity-75 sm:text-xl'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
                <a href="#" className='text-md border-b-[.3px] border-[#E0CCBB] sm:text-lg'>
                    Our Story
                </a>
                <hr className='bg-[#E0CCBB] my-7 opacity-70' />
                <div className="lists flex items-center justify-between">
                    <div className="list w-1/2 hidden sm:block">
                        <ul className='opacity-80 py-1 cursor-pointer text-sm sm:text-xl'>
                            <li >
                                Willem II Singel 8 </li>
                            <li>
                                6041 HS, Roermond </li>
                            <li>The Netherlands</li>
                            <li >
                                hello@exoape.com</li>
                        </ul>
                    </div>
                    <div className="list w-1/2">
                        <ul className='opacity-80 py-1 cursor-pointer text-sm sm:text-xl'>
                            <li >Work </li>
                            <li >Studio </li>
                            <li>News </li>
                            <li>Contact </li>
                        </ul>
                    </div>
                    <div className="list w-1/2">
                        <ul className='opacity-80 py-1 cursor-pointer text-sm sm:text-xl'>
                            <li>Behance </li>
                            <li>Dribbble </li>
                            <li>Twitter </li>
                            <li>Instagram </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute w-96 -right-12 top-0 sm:w-[75vw] sm:-right-32">
                <video autoPlay muted loop className='w-full h-full object-cover' src="/fotvid.mp4"></video>
            </div>

        </div>
    )
}

export default Footer