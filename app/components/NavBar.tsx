import React from 'react';
import { navLinks } from '../constants'

const NavBar = () => {
    return (
        <nav className="gap-10 font-kumbhSans hidden md:flex">
            {navLinks.map((links) => {
                return <div key={links.id}>{links.title}</div>
            })}
        </nav>
    )
}

export default NavBar
