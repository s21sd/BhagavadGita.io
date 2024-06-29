"use client"
import React, { useState } from 'react';
import Mainpage from './Mainpage';
import Defaultpage from './Defaultpage';
import Slokpage from './Slokpage';

const Sidebar = () => {
    const [chapter, setChapter] = useState(null);
    const [selectChapter, setSelectChapter] = useState<number>(1);
    const fetchThechapter = async (number: number) => {
        setSelectChapter(number);
        try {
            const response = await fetch(`/api/action/${number}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setChapter(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const getClassName = (chapNo: number) => {
        return selectChapter === chapNo
            ? 'bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active'
            : 'm-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active';
    };
    return (
        <div>
            <main className="flex">
                <div className="sm:w-60 w-14 pt-4 transition-all min-h-screen overflow-y-auto">
                    <div className="text-[#FF8434] p-6 font-bold text-2xl tracking-widest">
                        <h1>Chapters</h1>
                    </div>
                    <ul className="mt-6 mb-5">
                        <li onClick={() => fetchThechapter(1)} className={getClassName(1)}>
                            <span className="ml-3 hidden sm:block font-semibold tracking-wide text-white transition-colors">Chapter - 1</span>
                        </li>
                        <li onClick={() => fetchThechapter(2)} className={getClassName(2)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 2</span>
                        </li>
                        <li onClick={() => fetchThechapter(3)} className={getClassName(3)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 3</span>
                        </li>
                        <li onClick={() => fetchThechapter(4)} className={getClassName(4)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 4</span>
                        </li>
                        <li onClick={() => fetchThechapter(5)} className={getClassName(5)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 5</span>
                        </li>
                        <li onClick={() => fetchThechapter(6)} className={getClassName(6)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 6</span>
                        </li>
                        <li onClick={() => fetchThechapter(7)} className={getClassName(7)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 7</span>
                        </li>
                        <li onClick={() => fetchThechapter(8)} className={getClassName(8)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 8</span>
                        </li>
                        <li onClick={() => fetchThechapter(9)} className={getClassName(9)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 9</span>
                        </li>
                        <li onClick={() => fetchThechapter(10)} className={getClassName(10)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 10</span>
                        </li>
                        <li onClick={() => fetchThechapter(11)} className={getClassName(11)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 11</span>
                        </li>
                        <li onClick={() => fetchThechapter(12)} className={getClassName(12)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 12</span>
                        </li>
                        <li onClick={() => fetchThechapter(13)} className={getClassName(13)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 13</span>
                        </li>
                        <li onClick={() => fetchThechapter(14)} className={getClassName(14)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 14</span>
                        </li>
                        <li onClick={() => fetchThechapter(15)} className={getClassName(15)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 15</span>
                        </li>
                        <li onClick={() => fetchThechapter(16)} className={getClassName(16)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 16</span>
                        </li>
                        <li onClick={() => fetchThechapter(17)} className={getClassName(17)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 17</span>
                        </li>
                        <li onClick={() => fetchThechapter(18)} className={getClassName(18)}>
                            <span className="ml-3 hidden sm:block text-gray-400 font-semibold tracking-wide hover:text-white transition-colors">Chapter - 18</span>
                        </li>
                    </ul>
                </div>
                {/* <div className="flex-1">
                    {chapter ? <Mainpage chapter={chapter} /> : <Defaultpage />}
                </div> */}
                <Slokpage />
            </main>
        </div>
    );
};

export default Sidebar;
