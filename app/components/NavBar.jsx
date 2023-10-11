import { navLinks } from '../constants'

const NavBar = () => {
    return (
        <nav className="flex gap-4">
            {navLinks.map((links) => {
                return <div key={links.id}>{links.title}</div>
            })}
        </nav>
    )
}

export default NavBar
