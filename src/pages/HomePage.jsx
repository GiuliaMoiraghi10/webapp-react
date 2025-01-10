import CardMovie from "../components/CardMovie"
import { useState, useEffect } from "react"
import axios from "axios"
import style from './HomePage.module.css'

export default function HomePage() {

    const [movies, setMovies] = useState([])

    const [search, setSearch] = useState('')

    function fetchMovies() {

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
                <h1>Bool Movies</h1>
            </div>
            <form onSubmit={searchMovies}>
                <input type="text" placeholder="Cerca film" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Vai</button>
            </form>
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