import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import style from './DefaultLayout.module.css'
import Loader from "../components/Loader"
import { useContext } from "react"
import GlobalContext from "../context/globalContext"

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <section>
            <Header />
            <main className={style.main}>
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </section>
    )
}