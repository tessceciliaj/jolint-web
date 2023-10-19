'use client'
import PartBox from '../components/FormPartBox';
import { partBoxInfo } from '../constants';  
import React, { useState } from 'react'
import FormText from '../components/FormText'
import { formTextParagraph } from '../constants'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(0)

    return (
        <>
            <div className="flex items-start flex-col justify-start font-kumbhSans md:w-fit w-full">
                <div className='max-w-[505px] mb-[40px]'>
                    <FormText 
                        title={formTextParagraph[pageNumber].title}
                        text1={formTextParagraph[pageNumber].text1}
                        text2={formTextParagraph[pageNumber].text2}
                    />
                </div>
                <section className="gap-[20px] w-full flex flex-col lg:grid-cols-4 md:max-w-fit sm:grid sm:grid-cols-2">
                     {partBoxInfo.map((boxInfo) => (
                         <PartBox
                             key={boxInfo.id}
                             title={boxInfo.title}
                             subTitle={boxInfo.subTitle}
                             icon={boxInfo.icon}
                         />
                     ))}
                 </section>
                 <div className='flex sm:gap-[40px] gap-4 mt-[63px] w-full'>
                     <button className='lightBtn'>Back</button>
                     <button className='blueBtn'>Learn More</button>
                 </div>

            </div>
        </>
    );
}

export default Page;


