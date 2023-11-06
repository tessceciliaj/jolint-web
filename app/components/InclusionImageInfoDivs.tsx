'use client'
// Import necessary modules and components

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
            className={`flex flex-col items-center sm:items-start rounded-lg m-3 ${
                isOpen ? color : 'bg-white'
            }`}
        >
            <div className="relative ">
                <Image src={img} alt={title} width={350} height={275} />
                <div
                    className={`w-full max-w-[350px] max-h-[275px] p-5 overflow-hidden transition-max-h duration-300 ease-in-out`}
                >
                    <div className="flex justify-between items-center">
                        <h3 className="font-kumbhSans font-semibold text-base lg:text-xl p-4 sm:p-0">
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
                            className={`transition-opacity duration-300 ease-in-out opacity-100 p-4 sm:p-0`}
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
        <div className="max-w-screen-2xl m-auto">
            <div>
                <h2 className="text-2xl font-kumbhSans font-bold xl:ml-2 md:ml-16 ml-4 text-left w-[320px] md:w-full pb-7 ">
                    About inclusion at workplace
                </h2>
                <div className="lg:flex lg:flex-row 2xl:justify-between  xl:justify-center lg:space-x-6 pb-20">
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
                <h2 className="text-2xl font-kumbhSans font-bold xl:ml-2 md:ml-16 ml-4 text-left w-[320px] md:w-full pb-7">
                    About diversity in organizations
                </h2>
                <div className="lg:flex lg:flex-row 2xl:justify-between  xl:justify-center lg:space-x-6 pb-20">
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
                <h2 className="text-2xl font-kumbhSans font-bold 2xl:pl-4 md:pl-24 p-4 text-left w-[320px] md:w-full pb-7">
                    About mental health at work
                </h2>
                <div className="lg:flex lg:flex-row 2xl:justify-between  xl:justify-center lg:space-x-6 pb-20">
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
    )
}

export default InclusionImageInfoDivs
