import Image from 'next/image'
import React from 'react'

import defaultimg from '../../assests/default2.jpg'
import { FaHeart } from 'react-icons/fa'
const page = () => {
    return (
        <div className="text-gray-600 body-font m-12">
            <h1 className=' text-center font-bold text-[#FF8434] w-fit text-2xl tracking-widest'>Favourites</h1>
            <div className="flex flex-wrap">
                <div className="p-4 md:w-[400px] m-12">
                    <div className="h-full border-2  bg-[#FF8434] border-gray-200 rounded-md ">
                        <Image className='rounded-lg m-auto w-full h-auto'
                            src={defaultimg}
                            width="60"
                            height="0"
                            sizes="50vw"
                            alt="defaultImg "
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h1 className="tracking-widest font-bold text-lg s title-font text-white mb-1">Chapter - 1</h1>
                                <h1 className="title-font ml-4 font-medium text-white mb-3">verse - 1</h1>
                            </div>
                            <div>
                                <FaHeart size={24} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-[400px] m-12">
                    <div className="h-full border-2  bg-[#FF8434] border-gray-200 rounded-md ">
                        <Image className='rounded-lg m-auto w-full h-auto'
                            src={defaultimg}
                            width="60"
                            height="0"
                            sizes="50vw"
                            alt="defaultImg "
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h1 className="tracking-widest font-bold text-lg s title-font text-white mb-1">Chapter - 1</h1>
                                <h1 className="title-font ml-4 font-medium text-white mb-3">verse - 1</h1>
                            </div>
                            <div>
                                <FaHeart size={24} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-[400px] m-12">
                    <div className="h-full border-2  bg-[#FF8434] border-gray-200 rounded-md ">
                        <Image className='rounded-lg m-auto w-full h-auto'
                            src={defaultimg}
                            width="60"
                            height="0"
                            sizes="50vw"
                            alt="defaultImg "
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h1 className="tracking-widest font-bold text-lg s title-font text-white mb-1">Chapter - 1</h1>
                                <h1 className="title-font ml-4 font-medium text-white mb-3">verse - 1</h1>
                            </div>
                            <div>
                                <FaHeart size={24} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-[400px] m-12">
                    <div className="h-full border-2  bg-[#FF8434] border-gray-200 rounded-md ">
                        <Image className='rounded-lg m-auto w-full h-auto'
                            src={defaultimg}
                            width="60"
                            height="0"
                            sizes="50vw"
                            alt="defaultImg "
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h1 className="tracking-widest font-bold text-lg s title-font text-white mb-1">Chapter - 1</h1>
                                <h1 className="title-font ml-4 font-medium text-white mb-3">verse - 1</h1>
                            </div>
                            <div>
                                <FaHeart size={24} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-[400px] m-12">
                    <div className="h-full border-2  bg-[#FF8434] border-gray-200 rounded-md ">
                        <Image className='rounded-lg m-auto w-full h-auto'
                            src={defaultimg}
                            width="60"
                            height="0"
                            sizes="50vw"
                            alt="defaultImg "
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h1 className="tracking-widest font-bold text-lg s title-font text-white mb-1">Chapter - 1</h1>
                                <h1 className="title-font ml-4 font-medium text-white mb-3">verse - 1</h1>
                            </div>
                            <div>
                                <FaHeart size={24} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-[400px] m-12">
                    <div className="h-full border-2  bg-[#FF8434] border-gray-200 rounded-md ">
                        <Image className='rounded-lg m-auto w-full h-auto'
                            src={defaultimg}
                            width="60"
                            height="0"
                            sizes="50vw"
                            alt="defaultImg "
                        />
                        <div className="p-6 flex items-center justify-between">
                            <div>
                                <h1 className="tracking-widest font-bold text-lg s title-font text-white mb-1">Chapter - 1</h1>
                                <h1 className="title-font ml-4 font-medium text-white mb-3">verse - 1</h1>
                            </div>
                            <div>
                                <FaHeart size={24} color='white' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default page