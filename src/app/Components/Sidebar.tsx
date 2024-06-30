"use client"
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Mainpage from './Mainpage';
import Defaultpage from './Defaultpage';

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
            ? 'bg-[#FF8434] m-2 sm:m-3 md:m-3 lg:m-3 rounded-lg  cursor-pointer px-2 h-10  sm:px-4 sm:h-12 md:px-4 md:h-12 lg:px-4 lg:h-12 flex items-center justify-start sm:justify-center active'
            : 'm-2 sm:m-3 md:m-3 lg:m-3 rounded-lg cursor-pointer sm:justify-center px-2 h-10  sm:px-4 sm:h-12 md:px-4 md:h-12 lg:px-4 lg:h-12 flex items-center justify-start active';
    };

    return (
        <div>
            <main className="flex">
                <div>
                    <div className=" text-[#FF8434] flex-col p-2 sm:p-6 font-bold text-2xl tracking-widest">
                        <h1 className='text-[10px] sm:text-xl md:text-2xl lg:text-3xl'>Chapters</h1>
                    </div>
                    <ScrollArea className="w-20 sm:w-60 md:w-60 lg:w-60 pt-0 sm:pt-4 md:pt-4 lg:pt-4 h-screen rounded-md mycolor text-white">

                        <ul className="mt-6 mb-5">
                            {[...Array(18)].map((_, i) => (
                                <li
                                    key={i + 1}
                                    onClick={() => fetchThechapter(i + 1)}
                                    className={getClassName(i + 1)}
                                >
                                    <span className=" text-xl hidden sm:block font-semibold tracking-wide text-white mycolor transition-colors">
                                        Chapter - {i + 1}
                                    </span>
                                    <span className="text-[12px] sm:text-xl md:text-xl  lg:text-xl text-start block sm:hidden font-semibold tracking-wide text-white mycolor transition-colors">
                                        CH- {i + 1}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </div>
                <div className="flex-1">
                    {chapter ? <Mainpage chapter={chapter} /> : <Defaultpage />}
                </div>
            </main>
        </div>
    );
};

export default Sidebar;
