import React from 'react';
import iphone6 from '../assets/iphone6.png';

const Header = () => {
    return (
        <div className="text-white">
            <div className="text-center gap-10 w-screen h-[29rem] flex items-center justify-center text-[9vw] italic font-extrabold lg:not-italic">
                <div className="flex items-center">
                    <img
                        src={iphone6}
                        alt="logo"
                        className="absolute z-0 w-[22%] max-h-[50%] hover:rotate-12 hover:scale-125 duration-500 right-[12%]"
                    />
                    <span
                        data-replace='{ "translate-x-30": "translate-y-0" }'
                        className="z-10 absolute left-[7%]"
                    >
                        Sniff Right®
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
