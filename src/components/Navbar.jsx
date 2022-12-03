import React from 'react';
import { FaBars, FaPaw } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
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
        <div className="flex w-screen">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center px-2 text-2xl tracking-tighter font-bold p-2 md:text-5xl">
                    <FaPaw size={20} />
                    tindog
                </div>
                <div className="hidden md:flex">
                    <ul className="flex gap-3 text-lg">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="capitalize hover:cursor-pointer"
                            >
                                <Link
                                    to={link}
                                    smooth
                                    duration={500}
                                    className="md:text-2xl"
                                >
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <FaBars
                    size={20}
                    color="white"
                    className="absolute right-0 mr-4 md:hidden"
                />
            </div>
        </div>
    );
};

export default Navbar;
