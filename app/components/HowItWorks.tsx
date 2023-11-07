import React from 'react'
import Image from 'next/image'
import { howitworks } from '../constants'
import BlueLine from './BlueLine'

const HowItWorks = () => {
    return (
        <div className="py-20 mb-40 px-2m-auto relative">
            <h2
                id="how-it-works"
                className="font-poppins font-bold text-center text-4xl mb-16 md:m-0"
            >
                How it works
            </h2>
            <div className="hidden md:block sm:absolute m-auto left-0 right-0 top-[340px] bottom-0">
                <BlueLine />
            </div>
            <div className="xl:max-w-screen-2xl m-auto flex flex-col justify-center items-center gap-28 md:gap-0 px-4 md:px-6">
                {howitworks.map((article) => {
                    const imagePath = `/${article.img}.svg`

                    return (
                        <div
                            className="flex flex-col items-center xl:gap-60 md:gap-40 gap-4 md:h-[485px] md:grid md:grid-rows-1 md:grid-cols-2 md:items-center"
                            key={article.id}
                        >
                            <div className="flex justify-end max-h-[360px]">
                                <Image
                                    src={imagePath}
                                    alt={article.alt}
                                    width={500}
                                    height={300}
                                />
                            </div>
                            <div className="max-w-[540px] py-4 md:py-0 md:text-left text-center col-span-1">
                                <h3 className="font-kumbhSans text-2xl font-semibold py-2">
                                    {article.title}
                                </h3>
                                <p>{article.text}</p>
                            </div>
                            {article.id !== 5 ? (
                                <div className="md:hidden flex flex-row w-fit gap-2 items-center relative top-8">
                                    <div className="bg-activeBlue w-20 h-[2px]"></div>
                                    <div className="smallBlueDot"></div>
                                    <div className="bg-activeBlue w-20 h-[2px]"></div>
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HowItWorks
