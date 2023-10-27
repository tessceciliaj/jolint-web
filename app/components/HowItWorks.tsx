import React from 'react'
import Image from 'next/image'
import { howitworks } from '../constants'

const HowItWorks = () => {
    return (
        <div className="py-10 px-2 m-auto">
            <h2 className="font-poppins font-bold text-center text-[40px] pb-20">
                How it works
            </h2>
            <div className="max-w-[1107px] m-auto flex flex-col items-center">
                {howitworks.map((article) => {
                    const imagePath = `/${article.img}.svg`

                    return (
                        <div
                            className="flex flex-col md:flex-row pb-[142px]"
                            key={article.id}
                        >
                            <Image
                                src={imagePath}
                                alt={article.alt}
                                width={400}
                                height={300}
                            />
                            <div className="max-w-[520px] py-4 md:py-0 md:pl-[168px] text-center md:text-left">
                                <h3 className="font-kumbhSans text-2xl font-semibold py-8">
                                    {article.title}
                                </h3>
                                <p>{article.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HowItWorks
