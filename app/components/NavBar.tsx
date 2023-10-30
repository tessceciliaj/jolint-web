'use client'
import { useState } from 'react'
import React from 'react'
import { navLinks } from '../constants'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }

    return (
        <nav className="gap-10 font-kumbhSans">
            <div className="md:hidden absolute top-[32px] right-[24px]">
                <button onClick={toggleSidebar}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col h-[200px] justify-center  ">
                    {navLinks.map((links) => (
                        <div key={links.id}>
                            <Link href={links.href}>
                                <button onClick={closeSidebar}>
                                    {links.title}
                                </button>
                            </Link>
                        </div>
                    ))}
                    <Link href="/form">
                        <button className="orangeBtn" onClick={closeSidebar}>
                            Consent Form
                        </button>
                    </Link>
                </div>
            )}
            <div className="gap-10 font-kumbhSans hidden md:flex justify-center items-center">
                {navLinks.map((links) => (
                    <div key={links.id}>
                        <Link href={links.href}>
                            <button onClick={closeSidebar}>
                                {links.title}
                            </button>
                        </Link>
                    </div>
                ))}
                <Link href="/form">
                    <button className="orangeBtn" onClick={closeSidebar}>
                        Consent Form
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
