'use client'
import { useState } from 'react'
import React from 'react'
import { navLinks } from '../constants'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

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
                <motion.div
                    className={`md:hidden absolute flex flex-col h-screen pt-20 text-right pr-8 gap-10 bg-lightColor right-0 top-20 font-semibold ${
                        isOpen ? 'blur-background' : ''
                    }`}
                >
                    <motion.div
                        initial={{ x: 200 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-lightColor h-screen w-[245px] -z-10 absolute right-0 top-0"
                    ></motion.div>
                    {navLinks.map((links) => (
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            key={links.id}
                        >
                            <Link href={links.href}>
                                <button onClick={closeSidebar}>
                                    {links.title}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-screen"
                    >
                        <Link href="/form">
                            <button
                                className="orangeBtn absolute bottom-32 right-2"
                                onClick={closeSidebar}
                            >
                                Consent Form
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
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
                    <button className="orangeBtn " onClick={closeSidebar}>
                        Consent Form
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
