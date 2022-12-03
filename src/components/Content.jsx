import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
//install swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

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
        <div className="flex w-full h-screen justify-center">
            <figure className="border shadow-lg border-gray-300 h-2/5 my-2 w-[90vw] rounded-xl">
                <figcaption className="mx-7 mt-7 flex">
                    <Swiper modules={[Autoplay]} autoplay>
                        {quotes.map(({ name, index, quote }) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                    className="flex flex-col"
                                >
                                    <div className="flex relative">
                                        <div className="w-4/5">
                                            <h1 className="w-full">{name}</h1>
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
        </div>
    );
};

export default Content;
