import React from 'react'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const FormHeader = () => {
    return (
        <div className="flex p-8 bg-lightColor border-b-2 border-mediumGray">
            <Link href='/'>
                <Image src={Logo} alt="Logo" width={120} height={50} />
            </Link>
        </div>
    )
}

export default FormHeader
