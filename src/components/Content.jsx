import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
//install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

//images
import bizinsider from '../assets/bizinsider.png';
import mashable from '../assets/mashable.png';
import techcrunch from '../assets/techcrunch.png';
import tnw from '../assets/tnw.png';

//icons
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebook, FaFacebookF, FaTiktok, FaTwitter } from 'react-icons/fa';

const Content = () => {
    const quotes = [
        {
            index: 1,
            name: 'Max',
            quote: `With tindog, I've found the love of my life`,
        },
        {
            index: 2,
            name: 'Fido',
            quote: `The only bone I've got to pick is that I didn't use tindog sooner.`,
        },
        {
            index: 3,
            name: 'Sparky',
            quote: `I'm done sniffing other's dog's butts`,
        },
        {
            index: 4,
            name: 'Spot',
            quote: 'It really is true. Anything is paw-sible with tindog',
        },
    ];
    return (
        <>
            <div className="flex flex-col w-full h-screen items-center justify-start">
                <figure className="border shadow-xl border-gray-300 h-1/5 my-2 w-[90vw] rounded-xl">
                    <figcaption className="mx-7 mt-7 flex">
                        <Swiper modules={[Autoplay]} autoplay>
                            {quotes.map(({ name, index, quote }) => {
                                return (
                                    <SwiperSlide
                                        key={index}
                                        className="flex flex-col"
                                    >
                                        <div className="flex">
                                            <div className="w-4/5">
                                                <h1 className="w-full font-semibold">
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
                                        <q className="">{quote}</q>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </figcaption>
                </figure>
                <div className="w-[90vw] my-4 grid grid-cols-2 gap-5 justify-center items-center">
                    <img src={mashable} alt="tech" />
                    <img src={tnw} alt="tech" />
                    <img src={techcrunch} alt="tech" />
                    <img src={bizinsider} alt="tech" />
                </div>
                <div className="w-[90vw] my-4 grid grid-cols-3 gap-5 justify-evenly items-start">
                    <div>
                        <h1 className="uppercase font-bold my-4">legal</h1>
                        <ul className="hover:cursor-pointer">
                            <li>Privacy</li>
                            <li>Terms</li>
                            <li>Cookie Policy</li>
                            <li>Intellectual Property</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold my-4">careers</h1>
                        <ul className="hover:cursor-pointer">
                            <li>Careers</li>
                            <li>Tech Blog</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="uppercase font-bold my-4">socials</h1>
                        <div className="grid grid-cols-2 hover:cursor-pointer">
                            <div className="flex flex-col gap-3">
                                <BsInstagram size={20} />
                                <BsYoutube size={20} />
                            </div>
                            <div className="flex flex-col gap-3">
                                <FaTiktok size={20} />
                                <FaTwitter size={20} />
                                <FaFacebookF size={20} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="hover:cursor-pointer">
                            <li>FAQ</li>
                            <li>Destinations</li>
                            <li>Press Room</li>
                            <li>Contact</li>
                            <li>Promo Code</li>
                        </ul>
                    </div>
                </div>
                <hr className="border my-10 w-[90vw] bg-gray-500" />
                <div className="flex flex-col gap-3 text-center text-sm justify-center items-center text-gray-500">
                    <p>
                        FAQ / Safety Tips / Terms / Career Policy / Privacy
                        Settings
                    </p>
                    <p>©2022 Bark Group, LLC. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Content;
