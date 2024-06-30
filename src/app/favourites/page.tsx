"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import defaultimg from '../../assests/default2.jpg';
import { FaHeart } from 'react-icons/fa';
import { Popup } from '../Components/Popup';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
    const [favourites, setFavourites] = useState([]);
    const [slokData, setSlokData] = useState<any>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const getFavorites = () => {
        const favorites = localStorage.getItem('favorites');
        return favorites ? JSON.parse(favorites) : [];
    };

    useEffect(() => {
        let favorites = getFavorites();
        setFavourites(favorites);
    }, []);

    const ReadTheSavedVerse = async (chapterNo: string, verseNo: string) => {
        try {
            const response = await fetch(`/api/action/${chapterNo}/${verseNo}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSlokData(data);
            setIsDialogOpen(true);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const removeFromFavourites = (chapter: string, verse: string) => {
        let favorites = getFavorites();
        favorites = favorites.filter((fav: { chapter: string; verse: string; }) => fav.chapter !== chapter || fav.verse !== verse);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setFavourites(favorites);
        toast.success('Slok removed from favorites!', {
            style: {
                color: '#FF8434'
            }
        });
    };

    return (
        <div className="text-gray-600 body-font m-12">
            <Toaster />
            <h1 className='font-bold text-[#FF8434] text-2xl tracking-widest'>Favourites</h1>
            {favourites.length > 0 ? (
                <div className='flex flex-wrap justify-center items-center'>
                    {favourites.map((fav: any, index: number) => (
                        <div key={index} className="flex w-fit m-4">
                            <div onClick={() => ReadTheSavedVerse(fav.chapter, fav.verse)} className="p-4 md:w-[400px] cursor-pointer">
                                <div className="h-full border-2 bg-[#FF8434] border-gray-200 rounded-md">
                                    <Image className='rounded-lg m-auto w-full h-auto'
                                        src={defaultimg}
                                        width="60"
                                        height="0"
                                        sizes="50vw"
                                        alt="defaultImg"
                                    />
                                    <div className="p-6 flex justify-between">
                                        <div>
                                            <h1 className="tracking-widest font-bold text-lg s title-font text-white">Chapter {fav.chapter}</h1>
                                            <h1 className="title-font ml-4 font-medium text-white mb-4">verse - {fav.verse}</h1>
                                            <h1 className='title-font ml-4 font-semibold mb-3 text-black'>{fav.slok}</h1>
                                        </div>
                                        <div onClick={(e) => { e.stopPropagation(); removeFromFavourites(fav.chapter, fav.verse); }}>
                                            <FaHeart size={24} color='white' className="cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-semibold text-gray-700">No Favorites Yet</h2>
                    <p className="text-lg text-gray-500">Add some sloks to your favorites to see them here.</p>
                </div>
            )}
            {slokData && (
                <Popup
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    slokData={slokData}
                />
            )}
        </div>
    );
};

export default Page;
