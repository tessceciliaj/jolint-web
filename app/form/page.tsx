'use client'
import React, { useEffect, useState } from 'react'
import PartBox from '../components/FormPartBox'
import FormText from '../components/FormText'
import ConsentSignature from '../components/ConsentSignature'
import { partBoxInfo, formTextParagraph } from '../constants'
import ProgressDots from '../components/FormDots'
import Link from 'next/link'
// import { Info } from 'lucide-react'

const Page = () => {
    const partBoxPages = [0, 3, 5, 9, 13]
    const parts = [[1, 2], [4], [6, 7, 8], [10, 11, 12]]
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [visitedPages, setVisitedPages] = useState<boolean[]>(
        Array(13).fill(false)
    )
    const currentPart = parts.find((part) => part.includes(pageNumber))
    const [fullyVisitedParts, setFullyVisitedParts] = useState<number[]>(
        typeof window !== 'undefined'
            ? JSON.parse(localStorage.getItem('fullyVisitedParts')) || []
            : []
    )
    const isPartFullyVisited = (partIndex: number) =>
        fullyVisitedParts.includes(partIndex)

    useEffect(() => {
        const savedFullyVisitedParts = localStorage.getItem('fullyVisitedParts')
        const initialPageNumber = savedFullyVisitedParts
            ? partBoxPages[JSON.parse(savedFullyVisitedParts).length]
            : 0

        setPageNumber(initialPageNumber)
    }, [])

    useEffect(() => {
        localStorage.setItem(
            'fullyVisitedParts',
            JSON.stringify(fullyVisitedParts)
        )

        const partContainingPage = parts.findIndex((part) =>
            part.includes(pageNumber)
        )
        if (partContainingPage !== -1) {
            const partPages = parts[partContainingPage]
            const isPartVisited = partPages.every((page) => visitedPages[page])
            if (
                isPartVisited &&
                !fullyVisitedParts.includes(partContainingPage)
            ) {
                setFullyVisitedParts((prevFullyVisitedParts) => [
                    ...prevFullyVisitedParts,
                    partContainingPage,
                ])
            }
        }
    }, [pageNumber, visitedPages])

    const updateVisitedPages = (page: number, value: boolean) => {
        setVisitedPages((prev) => {
            const newVisitedPages = [...prev]
            newVisitedPages[page] = value
            return newVisitedPages
        })
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const nextPage = (): void => {
        setPageNumber((prev) => prev + 1)
        if (!partBoxPages.includes(pageNumber + 1)) {
            scrollToTop()
        }
    }

    const previousPage = (): void => {
        if (pageNumber > 0) {
            setPageNumber((prev) => prev - 1)
            updateVisitedPages(pageNumber, false)
        }
    }

    const handlePartBoxClick = (pages: React.SetStateAction<number>[]) => {
        setVisitedPages(Array(13).fill(false))
        setPageNumber(pages[0])
        scrollToTop()
    }

    const isNextBox = (partIndex: number) => {
        if (partIndex > 0) {
            const previousPartIndex = partIndex - 1
            const previousPartFullyVisited =
                isPartFullyVisited(previousPartIndex)
            return previousPartFullyVisited
        }
        return true
    }

    return (
        <>
            <div className="flex items-start flex-col justify-start font-kumbhSans xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[800px] w-full">
                <div className="flex items-start flex-col justify-start font-kumbhSans xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[700px] w-full">
                    <ProgressDots
                        currentPart={currentPart}
                        visitedPages={visitedPages}
                        updateVisitedPages={updateVisitedPages}
                        pageNumber={pageNumber}
                    />
                </div>

                <div className="max-w-[850px] mb-[40px] w-full">
                    <FormText
                        title={formTextParagraph[pageNumber].title}
                        text1={formTextParagraph[pageNumber].text1}
                        text2={formTextParagraph[pageNumber].text2}
                    />
                    {pageNumber === 12 && (
                        <ConsentSignature
                            nextPage={nextPage}
                            previousPage={previousPage}
                        />
                    )}
                </div>

                {partBoxPages.includes(pageNumber) && (
                    <section className="gap-[20px] w-full flex flex-col lg:grid-cols-4 md:max-w-fit sm:grid sm:grid-cols-2">
                        {partBoxInfo.map((boxInfo) => {
                            const boxPartIndex = parts.findIndex((part) =>
                                part.includes(boxInfo.pages[0])
                            )
                            return (
                                <PartBox
                                    key={boxInfo.id}
                                    title={boxInfo.title}
                                    subTitle={boxInfo.subTitle}
                                    icon={boxInfo.icon}
                                    iconGray={boxInfo.iconGray}
                                    isNextBox={isNextBox(boxPartIndex)}
                                    visited={isPartFullyVisited(boxPartIndex)}
                                    onclick={() =>
                                        handlePartBoxClick(boxInfo.pages)
                                    }
                                />
                            )
                        })}
                    </section>
                )}

                {partBoxPages.includes(pageNumber) && (
                    <div className="flex flex-col w-full text-end text-base">
                        {isPartFullyVisited(4)
                            ? '4 / 4'
                            : isPartFullyVisited(3)
                            ? '4 / 4'
                            : isPartFullyVisited(2)
                            ? '3 / 4'
                            : isPartFullyVisited(1)
                            ? '2 / 4'
                            : isPartFullyVisited(0)
                            ? '1 / 4'
                            : ''}
                    </div>
                )}

                <div className="flex sm:gap-[40px] mt-[30px] w-full">
                    {pageNumber !== 0 &&
                        pageNumber !== 13 &&
                        pageNumber !== 12 &&
                        (!partBoxPages.includes(pageNumber) ||
                            !isPartFullyVisited(3)) && (
                            <button
                                className="lightBtn w-[175px] h-[55px] mr-4"
                                onClick={previousPage}
                            >
                                Back
                            </button>
                        )}

                    {pageNumber !== 12 &&
                        pageNumber !== 0 &&
                        pageNumber !== 13 &&
                        (!partBoxPages.includes(pageNumber) ||
                            !isPartFullyVisited(3)) && (
                            <button
                                className="blueBtn w-[175px] h-[55px]"
                                onClick={nextPage}
                            >
                                Next
                            </button>
                        )}

                    {pageNumber === 0 && !isPartFullyVisited(0) && (
                        <button
                            className="blueBtn w-[175px] h-[55px]"
                            onClick={nextPage}
                        >
                            Start
                        </button>
                    )}

                    <div className="flex justify-center">
                        {isPartFullyVisited(3) &&
                            partBoxPages.includes(pageNumber) && (
                                <Link href="/form/finish">
                                    <button
                                        className="orangeBtn w-[175px] h-[55px]"
                                        onClick={() => {
                                            localStorage.clear()
                                        }}
                                    >
                                        Submit
                                    </button>
                                </Link>
                            )}
                    </div>
                </div>

                {/* <div className="flex mt-8 w-full justify-end">
                    <Link href="/#how-it-works" target="_blank">
                        <Info className="text-darkGray" size="32" />
                    </Link>
                </div> */}
            </div>
        </>
    )
}

export default Page
