import React from 'react'
import Image from 'next/image'
import FormHeader from '../components/FormHeader'
import FormText from '../components/FormText'
import Footer from '../components/Footer'
import { RootLayoutProps } from '../utils/types'
import speaker from '../../public/volume-2.svg'

const layout = ({ children }: RootLayoutProps) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <FormHeader />
            <main className='flex flex-grow flex-col items-center justify-start mt-[43px] mb-[143px] xl:mx-14 md:mx-10 sm:mx-8 mx-4'>
                <div className="xl:max-w-[1140px] lg:max-w-[980px] md:max-w-[700px] w-full flex flex-row">
                    <h1 className="font-bold sm:text-4xl text-3xl w-fit">
                        Consent Form for Data Processing
                    </h1>
                    <div className="ml-8">
                        <Image src={speaker} alt="Speaker Icon" />
                    </div>
                </div>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout
