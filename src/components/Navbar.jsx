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
        <div class="flex w-screen">
            <div class="flex justify-center items-center">
                <div className="flex justify-center items-center px-2 text-2xl tracking-tighter font-bold p-2">
                    <FaPaw size={20} />
                    tindog
                </div>
                <div className="hidden md:flex">
                    <ul className="flex gap-2 text-lg">
                        {links.map(({ id, link }) => (
                            <li
                                key={id}
                                className="capitalize hover:cursor-pointer"
                            >
                                <Link to={link} smooth duration={500}>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <FaBars
                    size={20}
                    color="black"
                    className="absolute right-0 mr-4"
                    onClick={() => alert(`Works!`)}
                />
            </div>
        </div>
    );
};

export default Navbar;
