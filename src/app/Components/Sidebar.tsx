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
            ? 'bg-[#FF8434] m-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active'
            : 'm-3 rounded-lg cursor-pointer sm:justify-start px-4 h-12 flex items-center justify-center active';
    };

    return (
        <div>
            <main className="flex">
                <ScrollArea className="sm:w-60 w-14 pt-4 h-screen rounded-md text-white">
                    <div className="text-[#FF8434] p-6 font-bold text-2xl tracking-widest">
                        <h1>Chapters</h1>
                    </div>
                    <ul className="mt-6 mb-5">
                        {[...Array(18)].map((_, i) => (
                            <li
                                key={i + 1}
                                onClick={() => fetchThechapter(i + 1)}
                                className={getClassName(i + 1)}
                            >
                                <span className="ml-3 hidden sm:block font-semibold tracking-wide text-white transition-colors">
                                    Chapter - {i + 1}
                                </span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
                <div className="flex-1">
                    {chapter ? <Mainpage chapter={chapter} /> : <Defaultpage />}
                </div>
            </main>
        </div>
    );
};

export default Sidebar;
