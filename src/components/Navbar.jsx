import React, { useState } from 'react';
import { FaBars, FaTimes, FaPaw } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'products',
        },
        {
            id: 2,
            link: 'learn',
        },
        {
            id: 3,
            link: 'safety',
        },
        {
            id: 4,
            link: 'support',
        },
        {
            id: 5,
            link: 'download',
        },
    ];
    return (
        <div className="h-15 w-full text-white">
            <div id="title+links" className="flex justify-start">
                <h1
                    id="title"
                    className="pl-4 text-3xl p-2 tracking-tight font-semibold"
                >
                    <FaPaw
                        size={20}
                        color="white"
                        className="inline-flex mr-1"
                    />
                    tindog
                </h1>
                <div
                    id="links"
                    className="flex ml-[2%] items-center invisible md:visible text-white"
                >
                    <ul className="inline-flex gap-4 text-lg">
                        {links.map(({ id, link }) => (
                            <li key={id} className="capitalize">
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div id="FaBars" className="absolute top-0 right-0 md:hidden">
                <FaBars
                    size={30}
                    color="white"
                    className="m-4"
                    onClick={() => alert(`Works!`)}
                />
            </div>
        </div>
    );
};

export default Navbar;
