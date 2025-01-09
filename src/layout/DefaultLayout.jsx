import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import style from './DefaultLayout.module.css'

export default function DefaultLayout() {
    return (
        <section>
            <Header />
            <main className={style.main}>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}