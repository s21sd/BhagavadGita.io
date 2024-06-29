"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { ModeToggle } from './ToggleMode';
import { motion } from 'framer-motion';
import { transition1 } from './Transition';
import { FaHeart } from 'react-icons/fa';
const Navbar = () => {
    const router = useRouter();
    return (
        <motion.div initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={{ type: 'spring', stiffness: 50, damping: 10 }} className="mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center justify-between ">
            <div onClick={() => router.push('/')} className="flex title-font font-medium items-center mb-4 md:mb-0 ">
                <h1 className="ml-3 text-2xl tracking-wide cursor-pointer font-bold leading-relaxed text-white mycolor">Bhagavad<span className='text-[#FF8434]'>Gita</span></h1>
            </div>
            <div className='flex gap-4 items-center'>
                <FaHeart onClick={() => router.push("/favourites")} className='cursor-pointer' size={36} color='#FF8434' />
                <ModeToggle />
            </div>



        </motion.div>

    )
}

export default Navbar