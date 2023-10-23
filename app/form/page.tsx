'use client'
import PartBox from '../components/FormPartBox'
import { partBoxInfo, formTextParagraph } from '../constants'
import React, { useState } from 'react'
import FormText from '../components/FormText'
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
                    {pageNumber !== 13 && (
                        <FormText
                            title={formTextParagraph[pageNumber].title}
                            text1={formTextParagraph[pageNumber].text1}
                            text2={formTextParagraph[pageNumber].text2}
                        />
                    )}
                    {pageNumber === 13 && (
                        <div className="text-center">
                            <FormText
                                title={formTextParagraph[pageNumber].title}
                                text1={formTextParagraph[pageNumber].text1}
                                text2={formTextParagraph[pageNumber].text2}
                            />
                        </div>
                    )}
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

                {partBoxPages.includes(pageNumber) && (
                    <div className="flex flex-col w-full text-end text-xl">
                        {pageNumber >= 13
                            ? '4'
                            : pageNumber >= 9
                            ? '3'
                            : pageNumber >= 5
                            ? '2'
                            : '1'}
                        /4
                    </div>
                )}

                <div className="flex sm:gap-[40px] gap-4 mt-[30px] w-full">
                    {pageNumber !== 0 && pageNumber !== 13 && (
                        <Link href="/">
                            <button className="lightBtn" onClick={previousPage}>
                                Back
                            </button>
                        </Link>
                    )}

                    {/* Förslag: Borde vara "Start" */}
                    {pageNumber === 0 && (
                        <button className="blueBtn" onClick={nextPage}>
                            Learn More
                        </button>
                    )}

                    {pageNumber !== 12 &&
                        pageNumber !== 0 &&
                        pageNumber !== 13 && (
                            <button className="blueBtn" onClick={nextPage}>
                                Next
                            </button>
                        )}
                    {pageNumber === 12 && (
                        <button className="orangeBtn" onClick={nextPage}>
                            Submit
                        </button>
                    )}

                    {/* Förslag: Borde vara "Done" */}
                    <div className="flex justify-center">
                        {pageNumber === 13 && (
                            <Link href="/">
                                <a className="lightBtn">Back</a>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
