import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='w-11/12 max-w-3xl min-h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>



            <h1 className=' text-3xl  sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
                iLearning Solutions
            </h1>
            <p>Master Strategic Project Management, Agile Scrum and 6Sigma, with our industry-led and global certification courses.</p>

            <div className='flex gap-4'>
                <a href="#contact"
                    className='px-4 text-sm md:text-lg md:px-10 py-1 md:py-3 rounded-full border border-white bg-black text-white  flex items-center gap-2'
                >Get Started <Image src={assets.right_arrow_white} alt='contact' className='w-4' /></a>
                <a href="/resume.pdf" download className='px-4 md:px-10 py-1 md:py-3  text-sm md:text-lg border rounded-full border border-gray-500 flex items-center gap-2'>View Courses <Image src={assets.download_icon} alt='contact' className='w-4' /></a>
            </div>

        </div>
    )
}

export default Hero