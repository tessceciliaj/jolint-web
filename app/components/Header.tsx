import React from 'react'
import NavBar from './NavBar'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <div className="flex justify-between p-8 bg-lightColor border-b-2 border-mediumGray">
            <Link href="/">
                <Image src={Logo} alt="Logo" width={120} height={50} />
            </Link>
            <div className="flex justify-center items-center gap-6">
                <NavBar />
                <Link href="/form">
                    <button className="orangeBtn">Consent Form</button>
                </Link>
            </div>
        </div>
    )
}

export default Header
