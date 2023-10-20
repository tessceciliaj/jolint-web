'use client'
import React, { useState } from 'react'
import PartBox from '../components/FormPartBox'
import FormText from '../components/FormText'
import { partBoxInfo, formTextParagraph } from '../constants'
import Link from 'next/link'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(0)
    const partBoxPages = [0, 3, 5, 9, 13]

    const nextPage = (): void => {
        setPageNumber((prev) => prev + 1)
        console.log(pageNumber + 1)
    }

    const previousPage = (): void => {
        setPageNumber((prev) => prev - 1)
        console.log(pageNumber - 1)
    }

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
                    <section className="gap-[19px] w-full flex flex-col p-4 lg:grid-cols-4 max-w-fit md:grid md:grid-cols-2">
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

            {pageNumber !== 0 && pageNumber !== 13 && (
                <button onClick={previousPage}>Back</button>
            )}
            {pageNumber !== 12 && pageNumber !== 13 && (
                <button onClick={nextPage}>Next</button>
            )}
            {pageNumber === 12 && <button onClick={nextPage}>Submit</button>}

            <div className="flex justify-center">
                {pageNumber === 13 && (
                    <a href="./">
                        <button>Close</button>
                    </a>
                )}
            </div>
        </>
    )
}

export default Page
