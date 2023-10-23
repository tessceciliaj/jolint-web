import React from 'react'
import Image from 'next/image'
import { PartBoxProps } from '../utils/types'

const PartBox = ({
    icon,
    title,
    subTitle,
    activeOnPage,
    currentPage,
    checkmarkPage,
}: PartBoxProps) => {
    return (
        <div className="flex justify-between w-full mb-[15px]">
            <div
                className={`flex flex-col p-[21px] border-2 rounded-[10px] lg:h-[270px] xl:w-[270px] lg:w-[230px] md:w-[340px] sm:w-full md:h-[260px] w-full 
        ${
            currentPage >= activeOnPage
                ? ' bg-lightColor border-mediumDarkGray'
                : ' bg-boxGray border-boxGray'
        }`}
            >
                <div className="flex justify-between w-full mb-[15px]">
                    <Image src={icon} alt="Logo" width={51} height={51} />
                    <div
                        className={`pt-[2px] border-2 h-[28px] w-[28px] rounded-[5px] ${
                            currentPage >= checkmarkPage
                                ? ' bg-checkmarkGreen border-checkmarkGreen'
                                : currentPage >= activeOnPage
                                ? 'bg-lightColor border-mediumDarkGray'
                                : ' bg-boxGray border-mediumDarkGray'
                        }`}
                    >
                        {currentPage >= checkmarkPage ? (
                            <Image src={'/Checkbox_white.svg'} alt="Logo" width={25} height={20} />
                        ) : null}  
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-[8px]">{title}</h2>
                    <p className="text-base leading-8">{subTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default PartBox


