import CardMovie from "../components/CardMovie"
import { useState, useEffect, useContext } from "react"
import axios from "axios"
import style from './HomePage.module.css'
import GlobalContext from "../context/globalContext"

export default function HomePage() {

    const { setIsLoading } = useContext(GlobalContext)

    const [movies, setMovies] = useState([])

    const [search, setSearch] = useState('')

    function fetchMovies() {

        setIsLoading(true)

        axios.get('http://localhost:3000/api/movies', {
            params: {
                search: search
            }
        })
            .then(response => {
                // console.log(res.data)
                setMovies(response.data)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    function searchMovies(e) {
        e.preventDefault()
        fetchMovies()
    }

    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <section>
            <div className="container">
                <h1 className={style.title}>Bool Movies</h1>
            </div>
            <form onSubmit={searchMovies} className={style.form}>
                <input className={style.input} type="text" placeholder="Cerca film" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className={style.btn}>Cerca</button>
            </form>
            <hr />
            <div className={style.container_card}>
                <ul className={style.row_card}>
                    {
                        movies.map(movie => {
                            return <li key={movie.id} className={style.col_4}>
                                <CardMovie movie={movie} />
                            </li>
                        })
                    }
                </ul>

            </div>
        </section>
    )
}