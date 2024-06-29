import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Slokpage = ({ slokData }: any) => {
    const { chapter, verse, slok, transliteration, ...authors } = slokData;
    const listOfAuthors = Object.values(authors);
    console.log(listOfAuthors);
    const modifiedData = { chapter, verse, slok, transliteration, listOfAuthors };

    return (

        <div className="flex-1 rounded-lg bg-opacity-20 mt-10 p-6">
            <h1 className="text-center font-bold text-[#FF8434] w-fit mx-auto text-2xl tracking-widest mt-10">
                Chapter - {chapter}
            </h1>
            <div className="m-12 flex justify-between items-center">
                <h1 className="text-[#FF8434] font-semibold text-xl">Verse - {verse}</h1>
                <FaRegHeart className="cursor-pointer" color="#FF8434" size={24} />
            </div>
            <div className="grid gap-3 m-12">
                <p className="text-white mycolor">Slok - <span className="text-gray-400 mycolor2">{slok}</span></p>
                <p className="text-white mycolor">Translation - <span className="text-gray-400 mycolor2">{transliteration}</span></p>
            </div>
            <div className="m-12">
                <h1 className="text-[#FF8434] text-xl font-semibold">Authors</h1>
            </div>
            <div>
                {modifiedData.listOfAuthors.map((author: any, index: number) => (
                    index != 0 &&
                    <div key={index} className="m-12 border border-[#edbb99] rounded-md p-4 gap-3">
                        <h1 className="text-[#FF8434] font-semibold tracking-wide mb-4">{author.author}</h1>
                        {author.ht && (
                            <div className="flex mt-4">
                                <p className="text-white mycolor">Hindi Translation:</p>
                                <h1 className="text-gray-400 ml-4 mycolor2">{author.ht}</h1>
                            </div>
                        )}
                        {author.et && (
                            <div className="flex mt-4">
                                <p className="text-white mycolor">English Translation:</p>
                                <h1 className="text-gray-400 ml-4 mycolor2">{author.et}</h1>
                            </div>
                        )}
                        {author.ec && (
                            <div className="flex mt-4">
                                <p className="text-white mycolor">English Commentary:</p>
                                <h1 className="text-gray-400 ml-4 mycolor2">{author.ec}</h1>
                            </div>
                        )}
                        {author.hc && (
                            <div className="flex mt-4">
                                <p className="text-white mycolor">Hindi Commentary:</p>
                                <h1 className="text-gray-400 ml-4 mycolor2">{author.hc}</h1>
                            </div>
                        )}
                        {author.sc && (
                            <div className="flex mt-4">
                                <p className="text-white mycolor">Sanskrit Commentary:</p>
                                <h1 className="text-gray-400 ml-4 mycolor2">{author.sc}</h1>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slokpage;
