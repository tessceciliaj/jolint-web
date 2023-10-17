'use client'
import React, { useState } from 'react'
import FormText from '../components/FormText'
import { formTextParagraph } from '../constants'

const Page = () => {
    const [pageNumber, setPageNumber] = useState<number>(8)

    return (
        <>
            <FormText
                title={formTextParagraph[pageNumber].title}
                text1={formTextParagraph[pageNumber].text1}
                text2={formTextParagraph[pageNumber].text2}
            />
        </>
    )
}

export default Page
