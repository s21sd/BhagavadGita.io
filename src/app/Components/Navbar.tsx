"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { ModeToggle } from './ToggleMode';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
const Navbar = () => {
    const router = useRouter();
    return (
        <motion.div initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }} className="mx-auto flex p-5 md:flex-row items-center justify-between ">
            <div onClick={() => router.push('/')} className="flex title-font font-medium items-center ">
                <h1 className="ml-3 hidden sm:block md:block lg:block text-xl tracking-wide cursor-pointer font-bold leading-relaxed text-white mycolor  sm:text-2xl md:text-2xl lg:text-2xl">Bhagavad<span className=' tracking-wide text-[#FF8434] leading-relaxed text-xl sm:text-2xl md:text-2xl lg:text-2xl '>Gita</span></h1>
                <h1 className="ml-3 block sm:hidden md:hidden lg:hidden text-2xl tracking-wide cursor-pointer font-bold leading-relaxed text-white mycolor  sm:text-2xl md:text-2xl lg:text-2xl">B<span className=' tracking-wide text-[#FF8434] leading-relaxed text-2xl sm:text-2xl md:text-2xl lg:text-2xl'>G</span></h1>
            </div>
            <div className='flex gap-4  justify-center items-center '>
                <FaHeart onClick={() => router.push("/favourites")} className='w-8 sm:w-20 md:w-fit lg:w-fit cursor-pointer' size={36} color='#FF8434' />
                <ModeToggle />
            </div>

        </motion.div>

    )
}

export default Navbar