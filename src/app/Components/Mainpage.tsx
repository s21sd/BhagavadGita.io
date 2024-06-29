import { Pagination } from '@/components/ui/pagination';
import React, { useState, useEffect } from 'react';
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import Slokpage from './Slokpage';

import { ScrollArea } from "@/components/ui/scroll-area";
const Mainpage = ({ chapter }: any) => {
  const [slokData, setSlokData] = useState<any>(null);
  const [selectedSlokNo, setSelectedSlokNo] = useState<number | null>(null);

  useEffect(() => {
    setSlokData(null)
  }, [chapter.chapter_number])
  useEffect(() => {
    if (selectedSlokNo !== null) {
      fetchTheSlok(chapter.chapter_number, selectedSlokNo);
    }
  }, [selectedSlokNo]);

  const fetchTheSlok = async (number: number, slokNo: number) => {
    try {
      const response = await fetch(`/api/action/${number}/${slokNo}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSlokData(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleClick = (slokNo: number) => {
    setSelectedSlokNo(slokNo);
  };

  const verseArr = [];
  for (let i = 0; i < chapter.verses_count; i++) {
    verseArr.push(
      <PaginationItem onClick={() => handleClick(i + 1)} key={i}>
        <PaginationLink href="#">{i + 1}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <ScrollArea className='h-screen'>


      <div>
        {chapter && !slokData && <div className="flex-1 rounded-lg bg-opacity-20 mt-10">
          <h1 className='text-center font-bold text-[#FF8434] w-fit mx-auto text-2xl tracking-widest mt-10'>Chapter - {chapter.chapter_number} </h1>
          <div className='m-12'>
            <h1 className='text-[#FF8434] font-semibold'>Total verses - {chapter.verses_count}</h1>
            <div className='grid gap-1 mt-3'>
              <p className='text-white mycolor'>Name - <span className='text-gray-400 mycolor2'>{chapter.name}</span></p>
              <p className='text-white mycolor'>Translation - <span className='text-gray-400 mycolor2'>{chapter.translation}</span></p>
            </div>
          </div>
          <div className='m-12'>
            <h1 className='text-[#FF8434] font-semibold'>Meaning -</h1>
            <div className='grid gap-1 mt-3'>
              <p className='text-white mycolor'>English - <span className='text-gray-400 mycolor2'>{chapter.meaning.en}</span></p>
              <p className='text-white mycolor'>Hindi - <span className='text-gray-400 mycolor2'>{chapter.meaning.hi}</span> </p>
            </div>
          </div>
          <div className='m-12'>
            <h1 className='text-[#FF8434] font-semibold'>Summary -</h1>
            <div className='flex gap-5 mt-3'>
              <h1 className='text-white font-semibold mycolor'>English </h1>
              <p className='text-gray-400 mycolor2'>{chapter.summary.en}</p>
            </div>
            <div className='flex gap-5 mt-12'>
              <h1 className='text-white font-semibold mycolor'>Hindi </h1>
              <p className='text-gray-400 mycolor2'>{chapter.summary.hi}</p>
            </div>
          </div>

        </div>
        }
        {slokData && <Slokpage slokData={slokData} />}
      </div >
      <div className='text-white m-10 flex flex-col gap-5 mycolor '>
        <h1 className='text-center font-semibold text-[#FF8434] w-fit mx-auto text-xl tracking-widest'>List Of Verses</h1>
        <Pagination>
          <PaginationContent>
            <div className='flex flex-wrap '>
              {verseArr}
            </div>
          </PaginationContent>
        </Pagination>
      </div>


    </ScrollArea>
  );
};

export default Mainpage;
