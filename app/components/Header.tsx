import React from 'react'
import NavBar from './NavBar'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="flex p-8 bg-lightColor border-2 border-mediumGray">
            <Image src={Logo} alt="Logo" width={120} height={50} />
            <NavBar />
        </div>
    )
}

export default Header
