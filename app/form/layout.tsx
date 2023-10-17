import React from 'react'
import FormHeader from '../components/FormHeader'
import Footer from '../components/Footer'
import { RootLayoutProps } from '../utils/types'

const layout = ({ children }: RootLayoutProps) => {
    return (
        <>
            <FormHeader />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default layout
