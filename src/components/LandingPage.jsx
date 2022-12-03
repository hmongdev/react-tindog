import React from 'react';
import iphone6 from '../assets/iphone6.png';
import StoreBadge from 'react-store-badge';
import Navbar from '../containers/Navbar';

const LandingPage = () => {
    return (
        <div className="flex flex-col w-full h-screen justify-center text-center">
            <Navbar />
            <div class="flex grow flex-col md:flex-row justify-center items-center">
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

            <div class="flex flex-col gap-5 text-md justify-center items-center h-fit my-10">
                <h2 className="font-extrabold italic lg:not-italic lg:text-2xl">
                    Anything is paw-sible™️
                </h2>
                <button className="capitalize py-2 font-semibold bg-white text-black rounded-full w-[80%] hover:bg-gray-300">
                    create account
                </button>
                <button className="capitalize py-2 font-semibold bg-white-100 rounded-full hover:text-black border-2 w-[80%]">
                    log in
                </button>
            </div>
            <div class="flex justify-center items-center w-full h-fit py-4">
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
