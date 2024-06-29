"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Landingpage = () => {
    const router = useRouter();
    const handleClick = () => {
        window.location.href = 'https://github.com/s21sd/BhagavadGita.io'
    }
    return (
        <div className=" flex flex-col justify-between items-center mt-10">
            <div className="container px-5 py-24 mx-auto">
                <div className='bg-[#232222] rounded-full text-[#FF8434] w-fit flex justify-center items-center mx-auto p-4'>
                    <h1>Start your day with Krishna's wisdom</h1>
                </div>
                <div className="flex flex-col text-center w-full mb-16 mt-5">
                    <h1 className="text-3xl font-bold title-font mb-5 text-white  mycolor tracking-widest">Discover the Bhagavad Gita</h1>
                    <p className="lg:w-[90%] font-semibold mx-auto leading-relaxed mb-1 mycolor text-white">"When a person responds to the joys and sorrows of others as if they were his own, he has attained the highest state of spiritual union."</p>
                    <p className="lg:w-2/3 mycolor2 font-semibold mx-auto leading-relaxed text-white mycolor">Immerse yourself in the timeless teachings of the Bhagavad Gita, a spiritual guide that has inspired millions across the world.</p>
                </div>
                <div className='grid gap-4'>
                    <div onClick={() => router.push('/chapters')} className='bg-[#FF8434] hover:bg-[#f79b5f] rounded-md w-[250px] cursor-pointer font-semibold mycolor text-white flex justify-center items-center mx-auto p-4'>
                        <h1>Start your journey</h1>
                    </div>
                    <div onClick={handleClick} className='border border-[#FF8434] rounded-md w-[250px] font-semibold mycolor cursor-pointer text-white flex justify-center items-center mx-auto p-4'>
                        <h1>Star on Github ⭐</h1>
                    </div>
                </div>
            </div>
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
                <h1 className='text-white text-center leading-relaxed mb-0'>Made by Sunny Srivastava</h1>
            </div> */}
        </div>
    )
}

export default Landingpage;
