import { NavLink } from "react-router-dom"
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav>
            <ul className={style.nav}>
                <li className={style.nav_list}>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li className={style.nav_list}>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}