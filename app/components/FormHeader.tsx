import React from 'react'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'

const FormHeader = () => {
    return (
        <div className="flex p-8 bg-lightColor border-2 border-mediumGray">
            <Image src={Logo} alt="Logo" width={120} height={50} />
        </div>
    )
}

export default FormHeader
