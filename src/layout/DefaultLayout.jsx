import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <section>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}