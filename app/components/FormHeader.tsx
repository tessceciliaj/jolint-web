import React from 'react'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const FormHeader = () => {
    return (
        <div className="flex p-8 bg-lightColor items-center border-b-2 mb:min-h-[110px] mb:max-h-[110px] h-[80px] border-mediumGray">
            <Link href='/'>
                <Image src={Logo} alt="Logo" width={120} height={50} />
            </Link>
        </div>
    )
}

export default FormHeader
