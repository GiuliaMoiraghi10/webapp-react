import Navbar from "../components/Navbar"
import style from './Header.module.css'

export default function Header() {
    return (
        <div className={style.header}>
            <h3 className={style.title}>Movies</h3>
            <Navbar />
        </div>
    )
}