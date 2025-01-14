import Navbar from "../components/Navbar"
import style from './Header.module.css'
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className={style.header}>
            <h3 className={style.title}><Link to='/'>Movies</Link></h3>
            <Navbar />
        </div>
    )
}