'use client'
import React, { useState } from 'react'
import PartBox from '../components/FormPartBox'
import FormText from '../components/FormText'
import { partBoxInfo } from '../constants'
import { formTextParagraph } from '../constants'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(0)

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
            <div className="flex flex-col items-center justify-center my-20">
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

                <section className="gap-[19px] w-full flex flex-col p-4 lg:grid-cols-4 max-w-fit md:grid md:grid-cols-2">
                    {partBoxInfo.map((boxInfo) => (
                        <PartBox
                            key={boxInfo.id}
                            title={boxInfo.title}
                            subTitle={boxInfo.subTitle}
                            icon={boxInfo.icon}
                        />
                    ))}
                </section>
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
