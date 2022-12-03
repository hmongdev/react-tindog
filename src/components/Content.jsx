import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';

const Content = () => {
    const quotes = [
        {
            name: 'Max',
            quote: `With tindog, I've found the love of my life`,
        },
        {
            name: 'Fido',
            quote: `The only bone I've got to pick is that I didn't use tindog sooner.`,
        },
        {
            name: 'Sparky',
            quote: `I'm done sniffing other's dog's butts`,
        },
        {
            name: 'Spot',
            quote: 'It really is true. Anything is paw-sible with tindog',
        },
    ];
    return (
        <div className="flex w-full h-screen justify-center">
            <figure className="border shadow-lg border-gray-300 h-2/5 my-2 w-[90vw] rounded-xl">
                <figcaption className="mx-7 mt-7 flex">
                    <div className="max-w-lg h-72 flex overflow-hidden relative">
                        {quotes.map(({ name, index, quote }) => {
                            return (
                                <div key={index}>
                                    <div className="w-4/5">
                                        <h1 className="w-full">{name}</h1>
                                        <hr className="w-full my-3 border-gray-400" />
                                    </div>
                                    <div className="w-fit ml-4">
                                        <ImQuotesLeft
                                            size={50}
                                            color="lightgray"
                                        />
                                    </div>
                                    <figcaption className="mx-7 flex">
                                        <q className="flex">{quote}</q>
                                    </figcaption>
                                </div>
                            );
                        })}
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default Content;
