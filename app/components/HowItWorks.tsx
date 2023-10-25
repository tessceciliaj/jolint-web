import React from 'react'
import Image from 'next/image'
import { howitworks } from '../constants'

const HowItWorks = () => {
    return (
        <div className="py-10">
            <h2 className="font-poppins font-bold text-center text-[40px] pb-20">
                How it works
            </h2>
            <div className="max-w-[1107px] m-auto flex flex-col justify-between items-center">
                {howitworks.map((article) => {
                    const imagePath = `../../public/${article.alt}.svg`

                    return (
                        <div
                            className="flex flex-col md:flex-row"
                            key={article.id}
                        >
                            <Image
                                src={imagePath}
                                alt={article.alt}
                                width={400}
                                height={300}
                            />
                            <div className="max-w-[520px] py-4 md:py-0">
                                <h3 className="font-kumbhSans text-2xl font-semibold pb-2">
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
