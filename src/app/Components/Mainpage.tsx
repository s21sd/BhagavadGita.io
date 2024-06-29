import { Pagination } from '@/components/ui/pagination'
import React, { useState } from 'react'
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"

const Mainpage = ({ chapter }: any) => {
  const verseArr = [];
  for (let i = 0; i < chapter.verses_count; i++) { // This concept is so cool I like it ⭐
    verseArr.push(
      <PaginationItem key={i}>
        <PaginationLink href="#">{i + 1}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <>
      {chapter && (
        <div className="flex-1 rounded-lg bg-opacity-20 mt-10">
          <h1 className='text-center font-bold text-[#FF8434] w-fit mx-auto text-2xl tracking-widest mt-10'>Chapter - {chapter.chapter_number} </h1>
          <div className='m-12'>
            <h1 className='text-[#FF8434] font-semibold'>Total verses - {chapter.verses_count}</h1>
            <div className='grid gap-1 mt-3'>
              <p className='text-white'>Name - <span className='text-gray-400'>{chapter.name}</span></p>
              <p className='text-white'>Translation - <span className='text-gray-400'>{chapter.translation}</span></p>
            </div>
          </div>
          <div className='m-12'>
            <h1 className='text-[#FF8434] font-semibold'>Meaning -</h1>
            <div className='grid gap-1 mt-3'>
              <p className='text-white'>English - <span className='text-gray-400'>{chapter.meaning.en}</span></p>
              <p className='text-white'>Hindi - <span className='text-gray-400'>{chapter.meaning.hi}</span> </p>
            </div>
          </div>
          <div className='m-12'>
            <h1 className='text-[#FF8434] font-semibold'>Summary -</h1>
            <div className='flex gap-5 mt-3'>
              <h1 className='text-white font-semibold'>English </h1>
              <p className='text-gray-400'>{chapter.summary.en}</p>
            </div>
            <div className='flex gap-5 mt-12'>
              <h1 className='text-white font-semibold'>Hindi </h1>
              <p className='text-gray-400'>{chapter.summary.hi}</p>
            </div>
          </div>
          <h1 className='text-center font-semibold text-[#FF8434] w-fit mx-auto text-xl tracking-widest mt-10'>List Of Verses</h1>
        </div>
      )}
      <div className='text-white mt-10 '>
        <Pagination>
          <PaginationContent>
            <div className='flex flex-wrap'>
              {...verseArr}
            </div>

          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default Mainpage;
