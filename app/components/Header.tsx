import React from 'react'
import NavBar from './NavBar'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex justify-between items-center mb:p-8 px-6 min-h-[110px] mb:max-h-[110px] bg-lightColor border-b-2 border-mediumGray">
            <Link href="/">
                <Image src={Logo} alt="Logo" width={120} height={50} />
            </Link>
            <div className="flex justify-center items-center gap-6">
                <NavBar />
            </div>
        </div>
    )
}

export default Header
