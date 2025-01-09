import { Link } from 'react-router-dom'
import style from './Footer.module.css'

export default function Footer() {
    return (
        <div className={style.footer}>
            <Link to='/' className={style.txt_footer}>Torna alla Home</Link>
        </div>
    )
}