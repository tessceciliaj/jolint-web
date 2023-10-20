import React from 'react'
import Image from 'next/image'
import FormHeader from '../components/FormHeader'
import Footer from '../components/Footer'
import { RootLayoutProps } from '../utils/types'
import speaker from '../../public/volume-2.svg'

const layout = ({ children }: RootLayoutProps) => {
    return (
        <>
            <FormHeader />
            <main>
                <div className="mt-8 flex flex-row">
                    <h1 className="font-bold text-4xl">
                        Consent Form for Data Processing
                    </h1>
                    <div className="ml-8">
                        <Image src={speaker} alt="Speaker Icon" />
                    </div>
                </div>

                {children}
            </main>
            <Footer />
        </>
    )
}

export default layout
