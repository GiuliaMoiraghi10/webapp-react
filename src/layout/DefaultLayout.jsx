import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import style from './DefaultLayout.module.css'
import Loader from "../components/Loader"

export default function DefaultLayout() {
    return (
        <section>
            <Header />
            <main className={style.main}>
                <Outlet />
            </main>
            <Footer />
            <Loader />
        </section>
    )
}