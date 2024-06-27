import React from 'react'

const Navbar = () => {
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between ">
            <div className="flex title-font font-medium items-center text-white mb-4 md:mb-0 ">
                <h1 className="ml-3 text-2xl tracking-wide cursor-pointer font-bold leading-relaxed">Bhagavad<span className='text-[#FF8434]'>Gita</span></h1>
            </div>
            <div>
                <label
                    className="relative inline-block h-6 w-12 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-[#FF8434]"
                >
                    <input className="peer sr-only" id="AcceptConditions" type="checkbox" />
                    <span
                        className="absolute inset-y-0 start-0 m-1 size-4 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
                    ></span>
                </label>
            </div>



        </div>

    )
}

export default Navbar