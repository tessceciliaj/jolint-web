import React from 'react'
import NavBar from './NavBar'
import Logo from '../../public/JOLINTlogo.svg'
import Image from 'next/image'
import arrowdown from '../../public/arrowdown.svg'
import globe from '../../public/globe.svg'

const Header = () => {
    return (
        <div className="flex justify-between p-8 bg-lightColor border-b-2 border-mediumGray">
            <Image src={Logo} alt="Logo" width={120} height={50} />
            <div className="flex justify-center items-center gap-6">
                <NavBar />
                <button className="orangeBtn">Consent Form</button>
            </div>
        </div>
    )
}

export default Header
