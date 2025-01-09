import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="d-flex justify-content-center align-items-center">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}