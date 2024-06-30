import React from 'react'
import Image from 'next/image'
import defaultimg from '../../assests/default2.jpg'
const Defaultpage = () => {
    return (
        <div className='mt-20'>
            {/* <h1 className="ml-3 text-2xl tracking-wide cursor-pointer font-bold leading-relaxed text-white">Bhagavad<span className='text-[#FF8434]'>Gita</span></h1> */}

            <Image className='rounded-lg m-auto w-[50%] h-auto'
                src={defaultimg}
                width="0"
                height="0"
                sizes="50vw"
                alt="defaultImg "
            />
            <div className="flex flex-col text-center w-full mb-16 mt-5 text-xs sm:text-xl p-2">
                <p className="lg:w-[90%] font-semibold mx-auto leading-relaxed mb-1 mycolor text-gray-400">Click on any chapter in the menu to read.</p>
                <p className="lg:w-2/3 font-semibold mx-auto leading-relaxed text-gray-400 mycolor2">Inside every chapter there are some verses.Click on any verseto read in detail with explanation various authors(Hindi,English,Sanskrit).</p>
            </div>
        </div>
    )
}

export default Defaultpage