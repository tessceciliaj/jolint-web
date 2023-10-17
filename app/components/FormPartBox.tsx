import React from 'react';
import Image from 'next/image';

type PartBoxProps = {
    icon: string;
    title: string;
    subTitle: string;
}

const PartBox = ({icon, title, subTitle}: PartBoxProps) => {

    return (
        <div className="flex flex-col p-[21px] border-2 border-mediumDarkGray rounded-[10px] h-64 w-64 bg-lightColor">
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


