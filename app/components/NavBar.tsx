import React from 'react';
import { navLinks } from '../constants'
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="gap-10 font-kumbhSans hidden md:flex">
            {navLinks.map((links) => {
                return (
                <div key={links.id}>
                    <Link href={links.href}>{links.title}</Link>
                    </div>
                )
            })}
        </nav>
    )
}

export default NavBar
