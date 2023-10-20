import React from 'react';
import Image from 'next/image';
import { PartBoxProps } from '../utils/types'


const PartBox = ({icon, title, subTitle}: PartBoxProps) => {

    return (
        <div className="flex flex-col p-[21px] border-2 border-mediumDarkGray rounded-[10px] lg:h-[270px] xl:w-[270px] lg:w-[230px] md:w-[340px] sm:w-full md:h-[260px] bg-lightColor">
            <div className='flex justify-between w-full mb-[15px]'>
                <Image src={icon} alt="Logo" width={51} height={51} />
                <div className='p-1 border-2 border-mediumDarkGray h-[28px] w-[28px] rounded-[5px]'></div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold mb-[8px]'>{title}</h2>
                <p className='text-base leading-8'>{subTitle}</p>
            </div>
        </div>
    );
};

export default PartBox;


