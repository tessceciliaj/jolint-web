'use client'
import React, { useState, useEffect } from 'react'
import PartBox from '../components/FormPartBox'
import FormText from '../components/FormText'
import ConsentSignature from '../components/ConsentSignature'
import { partBoxInfo, formTextParagraph } from '../constants'
import Link from 'next/link'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(12)
    const partBoxPages = [0, 3, 5, 9, 13]
    const [completedForm, setCompletedForm] = useState<boolean>(false)
    const [name, setName] = useState<string | undefined>('')
    const [isEmpty, setIsEmpty] = useState<boolean>(true)

    useEffect(() => {
        if (name !== undefined && !isEmpty) {
            setCompletedForm(true)
        } else {
            setCompletedForm(false)
        }
    }, [name, isEmpty])

    const nextPage = (): void => {
        setPageNumber((prev) => prev + 1)
    }

    const previousPage = (): void => {
        setPageNumber((prev) => prev - 1)
    }

    return (
        <>
            <div className="flex items-start flex-col justify-start font-kumbhSans xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[700px] w-full">
                <div className="max-w-[850px] mb-[40px]">
                    {pageNumber !== 13 && (
                        <FormText
                            title={formTextParagraph[pageNumber].title}
                            text1={formTextParagraph[pageNumber].text1}
                            text2={formTextParagraph[pageNumber].text2}
                        />
                    )}

                    {pageNumber === 12 && (
                        <ConsentSignature
                            onDone={() => nextPage()} // Handle "Done" button click
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
                    <section className="gap-[20px] w-full flex flex-col lg:grid-cols-4 md:max-w-fit sm:grid sm:grid-cols-2">
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

                {partBoxPages.includes(pageNumber) && pageNumber !== 0 && (
                    <div className="flex flex-col w-full text-end text-base">
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
                        <button className="lightBtn" onClick={previousPage}>
                            Back
                        </button>
                    )}

                    {pageNumber === 0 && (
                        <button className="blueBtn" onClick={nextPage}>
                            Start
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
                        <button
                            className={`orangeBtn ${
                                completedForm ? 'opacity-100' : 'opacity-50'
                            }`}
                            onClick={() => {
                                // setName(name + ' ') // This line is no longer needed
                                if (!isEmpty && name !== undefined) {
                                    console.log('completed')
                                    nextPage()
                                } else {
                                    console.log(
                                        'Please fill in all required fields.'
                                    )
                                }
                            }}
                        >
                            Submit
                        </button>
                    )}

                    <div className="flex justify-center">
                        {pageNumber === 13 && (
                            <Link href="/">
                                <button
                                    className="blueBtn"
                                    onClick={previousPage}
                                >
                                    Done
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
