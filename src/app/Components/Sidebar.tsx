import React from 'react'
import Mainpage from './Mainpage'
import Defaultpage from './Defaultpage'

const Sidebar = () => {
    return (
        <div>
            <main className="flex">
                <div className=" sm:w-60 min-h-screen w-14 pt-4 transition-all">
                    <div className=" text-[#FF8434] p-6 font-bold text-2xl tracking-widest">
                        <h1 >Chapters</h1>
                    </div>
                    <ul className="mt-6 mb-5">
                        <li className="bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block font-semibold tracking-wide text-white transition-colors">Chapter - 1</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 2</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 3</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 4</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 5</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 6</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 7</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 8</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 9</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 10</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 11</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 12</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 13</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 14</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 15</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 16</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 17</span>
                        </li>
                        <li className="hover:bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active">
                            <span className="ml-3 hidden sm:block  text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 18</span>
                        </li>

                    </ul>
                </div>
                {/* <Mainpage /> */}
                <div className='mx-auto '>  // I will show this default page when user visit the page first time
                    <Defaultpage />
                </div>
            </main></div>
    )
}

export default Sidebar