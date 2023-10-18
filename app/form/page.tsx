'use client'
import React, { useState } from 'react'
import PartBox from '../components/FormPartBox'
import FormText from '../components/FormText'
import { partBoxInfo } from '../constants'
import { formTextParagraph } from '../constants'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(0)

    return (
        <>
            <FormText
                title={formTextParagraph[pageNumber].title}
                text1={formTextParagraph[pageNumber].text1}
                text2={formTextParagraph[pageNumber].text2}
            />
            <div className="flex items-center justify-center my-20">
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
        </>
    )
}

export default Page
