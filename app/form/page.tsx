'use client'
import React, { useEffect, useState } from 'react'
import PartBox from '../components/FormPartBox'
import FormText from '../components/FormText'
import ConsentSignature from '../components/ConsentSignature'
import { partBoxInfo, formTextParagraph } from '../constants'
import Link from 'next/link'
import ProgressDots from '../components/FormDots'; 

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [visitedPages, setVisitedPages] = useState<boolean[]>(Array(13).fill(false)); 
    const partBoxPages = [0, 3, 5, 9, 13]
    const parts = [[1, 2], [4], [6, 7, 8], [10, 11, 12]];
    const currentPart = parts.find((part) => part.includes(pageNumber));
    const [fullyVisitedParts, setFullyVisitedParts] = useState<number[]>([]);

    useEffect(() => {
        const partContainingPage = parts.findIndex((part) => part.includes(pageNumber));
        if (partContainingPage !== -1) {
            const partPages = parts[partContainingPage];
            const isPartVisited = partPages.every((page) => visitedPages[page]);
            if (isPartVisited && !fullyVisitedParts.includes(partContainingPage)) {
                setFullyVisitedParts((prevFullyVisitedParts) => [...prevFullyVisitedParts, partContainingPage]);
            }
        }
    }, [pageNumber, visitedPages]);

    const isPartFullyVisited = (partIndex) => fullyVisitedParts.includes(partIndex);

    
    const isNextBox = (boxInfo) => {
        const currentPartIndex = parts.findIndex((part) => part.includes(pageNumber));
        const currentBoxPartIndex = parts.findIndex((part) => part.includes(boxInfo.pages[0]));
    
        console.log("currentPartIndex:", currentPartIndex);
        console.log("currentBoxPartIndex:", currentBoxPartIndex);
    
        if (currentPartIndex >= 0 && currentBoxPartIndex >= 0) {
            if (currentPartIndex === currentBoxPartIndex) {
                const isBoxNext = isPartFullyVisited(currentPartIndex);
                console.log("isBoxNext:", isBoxNext);
                return isBoxNext;
            }
        }
    
        console.log("Box not associated with the current part.");
        return false;
    };
        
      

    const updateVisitedPages = (page: number, value: boolean) => {
        setVisitedPages((prev) => {
            const newVisitedPages = [...prev];
            newVisitedPages[page] = value;
            return newVisitedPages;
        });
    };

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    
    const nextPage = (): void => {
        setPageNumber((prev) => prev + 1);
        if (!partBoxPages.includes(pageNumber + 1)) {
            scrollToTop()
        }
    };
    
    const previousPage = (): void => {
        if (pageNumber > 0) {
          setPageNumber((prev) => prev - 1);
          updateVisitedPages(pageNumber, false);
        }
    };

    const handlePartBoxClick = (pages: React.SetStateAction<number>[]) => {
        setVisitedPages(Array(13).fill(false));
        setPageNumber(pages[0]);
        scrollToTop()
    }

    return (
        <>
            <div className="flex items-start flex-col justify-start font-kumbhSans xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[700px] w-full">
                
                <div className="flex items-start flex-col justify-start font-kumbhSans xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[700px] w-full">
                    <ProgressDots currentPart={currentPart} visitedPages={visitedPages} updateVisitedPages={updateVisitedPages} pageNumber={pageNumber} />
                </div>
            
                <div className="max-w-[850px] mb-[40px]">
                    {pageNumber !== 13 && (
                        <FormText
                            title={formTextParagraph[pageNumber].title}
                            text1={formTextParagraph[pageNumber].text1}
                            text2={formTextParagraph[pageNumber].text2}
                        />
                    )}

                    {pageNumber === 12 && <ConsentSignature />}

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
                                icon={boxInfo.icon}
                                iconGray={boxInfo.iconGray}
                                activeOnPage={boxInfo.activeOnPage}
                                currentPage={pageNumber}
                                isNextBox={isNextBox(boxInfo)}
                                visited={isPartFullyVisited(parts.findIndex((part) => part.includes(boxInfo.pages[0])))}
                                onclick={() => handlePartBoxClick(boxInfo.pages)}
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
                        <button className="orangeBtn" onClick={nextPage}>
                            Submit
                        </button>
                    )}

                    <div className="flex justify-center">
                        {pageNumber === 13 && (
                            <Link href="/form/finish">
                                <button className="blueBtn">
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
