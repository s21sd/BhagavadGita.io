import React from 'react'
import Image from 'next/image'
import defaultimg from '../../assests/default2.jpg'
const Defaultpage = () => {
    return (
        <div>
            {/* <h1 className="ml-3 text-2xl tracking-wide cursor-pointer font-bold leading-relaxed text-white">Bhagavad<span className='text-[#FF8434]'>Gita</span></h1> */}
            <Image className='rounded-lg m-auto' width={500} height={500} src={defaultimg} alt='default_img' />
            <div className="flex flex-col text-center w-full mb-16 mt-5">
                <p className="lg:w-[90%] font-semibold mx-auto leading-relaxed mb-1 text-white">Click on any chapter in the menu to read.</p>
                <p className="lg:w-2/3 font-semibold mx-auto leading-relaxed text-white">Inside every chapter there are some verses.Click on any verseto read in detail with explanation various authors(Hindi,English,Sanskrit).</p>
            </div>
        </div>
    )
}

export default Defaultpage