'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { aboutDiversity, aboutInclusion, aboutMental } from '../constants'

interface SectionProps {
    img: string
    title: string
    text: string
    color: string
}

function Section({ img, title, text, color }: SectionProps) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSection = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={`flex flex-col rounded-lg max-w-[500px]${
                isOpen ? color : 'bg-white'
            }`}
        >
            <div className="relative w-full items-center flex flex-col">
                <Image
                    src={img}
                    alt={title}
                    width={350}
                    height={275}
                    className='w-full max-w-[500px] rounded-t-lg'
                />
                    <div className={`w-full max-w-[500px] sm:py-5 sm:px-4 py-3 px-3 overflow-hidden transition-max-h duration-300 ease-in-out rounded-b-lg ${color}`}>

                    <div className="flex justify-between items-start">
                        <h3 className="font-kumbhSans font-semibold text-base lg:text-lg p-4 sm:p-0 ">
                            {title}
                        </h3>
                        <ChevronDown
                            onClick={toggleSection}
                            className={`cursor-pointer ${
                                isOpen ? 'transform rotate-180' : ''
                            } m-4 sm:m-0`}
                        />
                    </div>
                    {isOpen && (
                        <p
                            className={`transition-opacity duration-300 ease-in-out opacity-100 px-4 sm:px-0 pt-1`}
                        >
                            {text}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

const InclusionImageInfoDivs = () => {
    return (
        <section className='flex flex-col items-center w-full pb-56'>
            <div className="max-w-[1200px] w-full lg:px-8 md:px-6 px-4">
                <div>
                    <h2 className="w-full text-center text-2xl font-kumbhSans font-bold py-4 sm:text-left pb-7">
                        About inclusion at workplace
                    </h2>
                    <div className="sm:grid sm:grid-rows-2 sm:grid-cols-2 mb:grid-rows-1 mb:grid-cols-3 flex sm:flex-row justify-center sm:justify-start flex-col mb:items-top mb:justify-between pb-20 w-full sm:gap-4 gap-6">
                        {aboutInclusion.map((item) => (
                            <Section
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="w-full text-center text-2xl font-kumbhSans font-bold py-4 sm:text-left pb-7">
                        About diversity in organizations
                    </h2>
                    <div className="sm:grid sm:grid-rows-2 sm:grid-cols-2 mb:grid-rows-1 mb:grid-cols-3 flex sm:flex-row justify-center sm:justify-start flex-col mb:items-top mb:justify-between pb-20 w-full sm:gap-4 gap-6">
                        {aboutDiversity.map((item) => (
                            <Section
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="w-full text-center text-2xl font-kumbhSans font-bold py-4 sm:text-left pb-7">
                        About mental health at work
                    </h2>
                    <div className="sm:grid sm:grid-rows-2 sm:grid-cols-2 mb:grid-rows-1 mb:grid-cols-3 flex sm:flex-row justify-center sm:justify-start flex-col mb:items-top mb:justify-between pb-20 w-full sm:gap-4 gap-6">
                        {aboutMental.map((item) => (
                            <Section
                                key={item.id}
                                img={item.img}
                                title={item.title}
                                text={item.text}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InclusionImageInfoDivs
