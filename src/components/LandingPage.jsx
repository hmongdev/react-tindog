import React from 'react';
import iphone6 from '../assets/iphone6.png';
import StoreBadge from 'react-store-badge';
import Navbar from './Navbar';

const LandingPage = () => {
    return (
        <div className="flex flex-col w-full h-screen justify-center text-center bg-gradient-to-b from-black via-red-400 to-black text-white">
            <Navbar />
            <div className="flex grow flex-col md:flex-row justify-center items-center">
                <h1 className="w-3/5 italic font-extrabold lg:not-italic text-[9vw]">
                    Sniff Right®
                </h1>
                <div className="hidden w-1/5 md:flex md:w-1/4">
                    <img
                        src={iphone6}
                        alt="logo"
                        className="mx-auto w-full hover:rotate-12 hover:scale-105 duration-500"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-5 text-md justify-center items-center h-fit my-10">
                <h2 className="font-extrabold italic md:not-italic md:text-4xl">
                    Anything is paw-sible™️
                </h2>
                <button className="capitalize py-2 md:py-4 md:text-2xl font-semibold bg-white text-black hover:bg-black hover:text-white rounded-full w-[80%]">
                    create account
                </button>
                <button className="capitalize py-2 md:py-4 md:text-2xl font-semibold bg-white-100 rounded-full hover:bg-white hover:text-black border-2 w-[80%] text-white">
                    log in
                </button>
            </div>
            <div className="flex justify-center items-center w-full h-fit py-4">
                <span>
                    <StoreBadge appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1" />
                </span>
                <span>
                    <StoreBadge googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe" />
                </span>
            </div>
        </div>
    );
};

export default LandingPage;
