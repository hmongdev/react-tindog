import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
//install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

//images
import dog from '../assets/dog-img.jpg';
import lady from '../assets/lady-img.jpg';
import duke from '../assets/duke.jpg';
import bella from '../assets/bella.jpg';
//socials
import bizinsider from '../assets/bizinsider.png';
import mashable from '../assets/mashable.png';
import techcrunch from '../assets/techcrunch.png';
import tnw from '../assets/tnw.png';

//icons
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';

const Content = () => {
    const quotes = [
        {
            index: 1,
            name: 'Natalie',
            src: lady,
            quote: `My dog used to be so lonely, but with TinDog, they've found the love of their life!`,
        },
        {
            index: 2,
            name: 'Pebbles',
            src: dog,
            quote: `The only bone I've got to pick is that I didn't use tindog sooner.`,
        },
        {
            index: 3,
            name: 'Max',
            src: duke,
            quote: `I'm done sniffing other's dog's butts`,
        },
        {
            index: 4,
            name: 'Luna',
            src: bella,
            quote: 'It really is true. Anything is paw-sible with tindog',
        },
    ];

    const socials = [
        {
            id: 1,
            child: (
                <button>
                    <BsInstagram size={30} />
                </button>
            ),
        },
        {
            id: 2,
            child: (
                <button>
                    <BsYoutube size={30} />
                </button>
            ),
        },
        {
            id: 3,
            child: (
                <button>
                    <FaTiktok size={30} />
                </button>
            ),
        },
        {
            id: 4,
            child: (
                <button>
                    <FaTwitter size={30} />
                </button>
            ),
        },
        {
            id: 5,
            child: (
                <button>
                    <FaFacebookF size={30} />
                </button>
            ),
        },
    ];
    return (
        <>
            <div className="flex flex-col w-full h-screen items-center justify-start">
                <figure className="border shadow-xl border-gray-300 h-1/3 m-10 w-[90vw] rounded-xl">
                    <figcaption className="mx-7 mt-7 flex">
                        <Swiper modules={[Autoplay]} autoplay>
                            {quotes.map(({ name, index, quote, src }) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex flex-col"
                                    >
                                        <div className="flex">
                                            <div className="w-4/5">
                                                <h1 className="w-full font-semibold md:text-3xl">
                                                    {name}
                                                </h1>
                                                <hr className="w-full my-3 border-gray-400" />
                                            </div>
                                            <div className="absolute right-0">
                                                <ImQuotesLeft
                                                    size={50}
                                                    color="lightgray"
                                                />
                                            </div>
                                        </div>
                                        <q className="md:text-2xl">{quote}</q>
                                        <div className="hidden md:flex justify-center items-center">
                                            <img
                                                src={src}
                                                alt="logo"
                                                className="rounded-full w-[15%]"
                                            />
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </figcaption>
                </figure>
                <div className="w-[90vw] h-fit grid grid-cols-2 items-center">
                    <img src={mashable} alt="tech" />
                    <img src={tnw} alt="tech" />
                    <img src={techcrunch} alt="tech" />
                    <img src={bizinsider} alt="tech" />
                </div>
                <div className="w-[90vw] my-4 grow grid grid-cols-3 gap-5 justify-evenly text-gray-400 items-start md:text-2xl">
                    <div>
                        <h1 className="uppercase font-bold my-4 text-black">
                            legal
                        </h1>
                        <div className="flex flex-col hover:cursor-pointer">
                            <a href="/">Privacy</a>
                            <a href="/">Terms</a>
                            <a href="/">Cookie Policy</a>
                            <a href="/">Intellectual Property</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold my-4 text-black">
                            careers
                        </h1>
                        <div className="flex flex-col hover:cursor-pointer">
                            <a href="/">Careers</a>
                            <a href="/">Tech Blog</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold my-4 text-black">
                            socials
                        </h1>
                        <div className="grid grid-cols-2 text-black hover:cursor-pointermd:flex">
                            <div className="flex flex-col md:flex-row gap-4">
                                {socials.map(({ id, child }) => (
                                    <div key={id}>{child}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col hover:cursor-pointer">
                            <a href="/">FAQ</a>
                            <a href="/">Destinations</a>
                            <a href="/">Press Room</a>
                            <a href="/">Contact</a>
                            <a href="/">Promo Code</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <div className="flex flex-col text-center text-sm justify-center items-center text-gray-500">
                        <ul className="flex justify-evenly gap-4 my-4 text-xs md:text-xl">
                            <li>
                                <a href="/">FAQ</a>
                            </li>
                            <li>
                                <a href="/">Safety Tips</a>
                            </li>
                            <li>
                                <a href="/">Terms</a>
                            </li>
                            <li>
                                <a href="/">Career Policy Tips</a>
                            </li>
                            <li>
                                <a href="/">Privacy Settings</a>
                            </li>
                        </ul>
                        <hr className="border w-[90vw] bg-gray-500" />
                        <p className="my-4 text-xs md:text-xl">
                            ©2022 Bark Group, LLC. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
