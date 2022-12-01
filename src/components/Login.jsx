import React from 'react';
import StoreBadge from 'react-store-badge';

const Login = () => {
    return (
        <div className="flex flex-col h-max">
            <div className="flex flex-col justify-center items-center gap-5 mt-20">
                <h2 className="text-white font-extrabold italic lg:not-italic text-center text-lg">
                    Anything is paw-sible™️
                </h2>
                <button className="text-xl capitalize py-2 font-semibold bg-white rounded-full w-[80%] border-2 hover:bg-black hover:text-white">
                    create account
                </button>
                <button className="text-xl capitalize py-2 font-semibold bg-white-100 rounded-full text-white border-2 w-[80%] hover:bg-white hover:text-black">
                    log in
                </button>
            </div>
            <div className="p-10">
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

export default Login;
