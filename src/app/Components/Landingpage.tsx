"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from './Transition';
const Landingpage = () => {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = 'https://github.com/s21sd/BhagavadGita.io'
    }
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1} className=" flex flex-col justify-between items-center mt-4">
            <div className="container px-5 py-24 mx-auto">
                <motion.div initial={{ opacity: 0, y: '-50%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-50%' }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }} className='bg-[#232222] rounded-full text-[#FF8434] w-fit flex justify-center items-center mx-auto p-4 '>
                    <h1>Start your day with Krishna's wisdom</h1>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: '-50%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-50%' }}
                    transition={{ type: 'spring', stiffness: 100, damping: 10 }} className="flex flex-col text-center w-full mb-10 mt-5">
                    <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold title-font mb-5 text-white  mycolor tracking-widest">Discover the Bhagavad Gita</h1>
                    <p className="lg:w-[90%] font-semibold text-xm sm:text-xm mx-auto leading-relaxed mb-1 mycolor text-white">"When a person responds to the joys and sorrows of others as if they were his own, he has attained the highest state of spiritual union."</p>
                    <p className="lg:w-2/3 mycolor2 font-semibold text-xs sm:text-xl mx-auto leading-relaxed text-white mycolor">Immerse yourself in the timeless teachings of the Bhagavad Gita, a spiritual guide that has inspired millions across the world.</p>
                </motion.div>
                <motion.div initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 50, damping: 10 }} className='grid gap-4'>
                    <div onClick={() => router.push('/chapters')} className='bg-[#FF8434] hover:bg-[#f79b5f] rounded-md w-[250px] cursor-pointer font-semibold mycolor text-white flex justify-center items-center mx-auto p-4'>
                        <h1>Start your journey</h1>
                    </div>
                    <div onClick={handleClick} className='border border-[#FF8434] rounded-md w-[250px] font-semibold mycolor cursor-pointer text-white flex justify-center items-center mx-auto p-4'>
                        <h1>Star on Github ⭐</h1>
                    </div>
                </motion.div>
            </div>
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <h1 className='text-white text-center leading-relaxed mb-0'>Made by Sunny Srivastava</h1>
            </div> */}
        </motion.div >
    )
}

export default Landingpage;
