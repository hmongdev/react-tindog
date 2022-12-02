import React from 'react';
import iphone6 from '../assets/iphone6.png';
import StoreBadge from 'react-store-badge';

const Header = () => {
    return (
        <div className="w-full flex flex-col justify-center text-center">
            <div className="max-w-screen-lg mx-auto items-center justify-center flex flex-col md:flex-row">
                <div className="w-[40%] md:w-[25%] m-5">
                    <img
                        src={iphone6}
                        alt="logo"
                        className="mx-auto invisible sm:visible hover:rotate-12 hover:scale-105 duration-500"
                    />
                </div>
                <div className="text-[9vw] italic font-extrabold lg:not-italic">
                    Sniff Right®
                </div>
            </div>

            <h2 className="font-extrabold italic lg:not-italic text-lg">
                Anything is paw-sible™️
            </h2>
            <div className="flex flex-col justify-center items-center gap-5">
                <button className="text-xl capitalize py-2 font-semibold bg-white text-black rounded-full w-[80%] hover:bg-gray-300">
                    create account
                </button>
                <button className="text-xl capitalize py-2 font-semibold bg-white-100 rounded-full hover:text-black border-2 w-[80%]">
                    log in
                </button>
            </div>
            <div className="">
                <ul className="flex justify-evenly">
                    <li>
                        <StoreBadge appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1" />
                    </li>
                    <li>
                        <StoreBadge googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
