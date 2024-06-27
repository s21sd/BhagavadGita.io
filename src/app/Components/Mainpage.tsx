import { Pagination } from '@/components/ui/pagination'
import React from 'react'
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,

} from "@/components/ui/pagination"
const Mainpage = () => {
  return (
    <div className="flex-1 rounded-lg  bg-opacity-20 mt-10">

      <h1 className='text-center font-bold text-[#FF8434] w-fit mx-auto text-2xl tracking-widest mt-10'>Chapter - 1 </h1>
      <div className='m-12'>
        <h1 className='text-[#FF8434] font-semibold'>Total verse - 47</h1>
        <div className='grid gap-1 mt-3'>
          <p className='text-white'>Name - <span className='text-gray-400'>अर्जुन विषाद योग</span></p>
          <p className='text-white'>Traslation - <span className='text-gray-400'>Arjun Visada Yoga</span></p>
        </div>
      </div>
      <div className='m-12'>
        <h1 className='text-[#FF8434] font-semibold'>Meaning -</h1>
        <div className='grid gap-1 mt-3'>
          <p className='text-white'>English - <span className='text-gray-400'>Arjun Dilemma</span></p>
          <p className='text-white'>Hindi - <span className='text-gray-400'>अर्जुन विषाद योग</span>  </p>
        </div>
      </div>
      <div className='m-12'>
        <h1 className='text-[#FF8434] font-semibold'>Summary -</h1>
        <div className='flex gap-5 mt-3'>
          <h1 className='text-white font-semibold'>English </h1>
          <p className='text-gray-400'> Krishna provides guidance and reassurance to Arjuna regarding his duty to fight in a battle.Krishna tells Arjuna that it is his duty to protect dharma, or righteousness, and that he should fight without attachment to the results.
            Krishna also explains that the soul is eternal and indestructible, and that death is simply a transition from one body to another </p>
        </div>
        <div className='flex gap-5 mt-12'>
          <h1 className='text-white font-semibold'>Hindi </h1>
          <p className='text-gray-400'> भगवद्गीता का उपदेश एक ही वंश के दो परिवारों के चचेरे भाइयों कौरव और पाण्डवों के मध्य हुए महाभारत के युद्ध की रणभूमि पर दिया गया। इस पुस्तक के परिचय से संबंधित प्रारम्भिक पृष्ठों में उल्लिखित 'गीता का परिवेश' खण्ड में उन घटनाओं का विस्तृत रूप से वर्णन किया गया है जिनके कारण यह महायुद्ध हुआ।  </p>
        </div>
      </div>
      <h1 className='text-center font-semibold text-[#FF8434] w-fit mx-auto text-xl tracking-widest mt-10'>List Of Verses</h1>
      <div className='text-white mt-10'>
        <Pagination>
          <PaginationContent>

            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>


          </PaginationContent>
        </Pagination>
      </div>

    </div>
  )
}

export default Mainpage