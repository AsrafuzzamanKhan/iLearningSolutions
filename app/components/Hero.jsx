'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        // <div className='w-11/12 max-w-3xl min-h-screen text-center mx-auto flex flex-col items-center justify-center gap-4'>

        //     <h1 className=' text-3xl  sm:text-4xl md:text-5xl lg:text-[60px] font-Ovo'>
        //         iLearning Solutions
        //     </h1>
        //     <p>Master Strategic Project Management, Agile Scrum and 6Sigma, with our industry-led and global certification courses.</p>

        //     <div className='flex gap-4'>
        //         <a href="#contact"
        //             className='px-4 text-sm md:text-lg md:px-10 py-1 md:py-3 rounded-full border border-white bg-black text-white  flex items-center gap-2'
        //         >Get Started </a>
        //         <a href="/resume.pdf" download className='px-4 md:px-10 py-1 md:py-3  text-sm md:text-lg border rounded-full border border-gray-500 flex items-center gap-2'>View Courses </a>
        //     </div>

        // </div>
        <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-3xl">
                <motion.h1
                    className="text-5xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Empower Your Learning Journey
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mb-8 text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Access expert-led courses anytime, anywhere with iLearning Solutions.
                </motion.p>
                <motion.div
                    className="flex justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <a href="#courses" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                        Browse Courses
                    </a>
                    <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero