'use client'
import PartBox from '../components/FormPartBox'
import { partBoxInfo, formTextParagraph } from '../constants'
import React, { useState } from 'react'
import FormText from '../components/FormText'
import Link from 'next/link'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(0)
    const partBoxPages = [0, 3, 5, 9, 13]

    return (
        <>
            <div className="flex items-start flex-col justify-start font-kumbhSans md:w-fit w-full">
                <div className="max-w-[505px] mb-[40px]">
                    <FormText
                        title={formTextParagraph[pageNumber].title}
                        text1={formTextParagraph[pageNumber].text1}
                        text2={formTextParagraph[pageNumber].text2}
                    />
                </div>
                {partBoxPages.includes(pageNumber) && (
                    <section className="gap-[20px] w-full flex flex-col lg:grid-cols-4 max-w-fit md:grid md:grid-cols-2">
                        {partBoxInfo.map((boxInfo) => (
                            <PartBox
                                key={boxInfo.id}
                                title={boxInfo.title}
                                subTitle={boxInfo.subTitle}
                                icon={
                                    pageNumber >= boxInfo.activeOnPage
                                        ? boxInfo.icon
                                        : boxInfo.iconGray
                                }
                                activeOnPage={boxInfo.activeOnPage}
                                checkmarkPage={boxInfo.checkmarkPage}
                                currentPage={pageNumber}
                            />
                        ))}
                    </section>
                )}
                <div className="flex sm:gap-[40px] gap-4 mt-[30px] w-full">
                    <Link href="/">
                        <button className="lightBtn">Back</button>
                    </Link>
                    <button className="blueBtn">Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Page
