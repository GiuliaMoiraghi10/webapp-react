import CardMovie from "../components/CardMovie"
import { useState, useEffect } from "react"
import axios from "axios"
import style from './HomePage.module.css'

export default function HomePage() {

    const movie = {
        "id": 1,
        "title": "Inception",
        "director": "Christopher Nolan",
        "genre": "Science Fiction",
        "release_year": 2010,
        "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
        "image": "inception.jpg",
        "created_at": "2024-11-29T10:40:13.000Z",
        "updated_at": "2025-01-09T11:37:42.000Z"
    }

    return (
        <section>
            <div className="container">
                <h1>Bool Movies</h1>
            </div>
            <div className={style.container_card}>
                <div className={style.row_card}>
                    <div className={style.col_4}>
                        <CardMovie movie={movie} />
                    </div>
                    <div className={style.col_4}>
                        <CardMovie movie={movie} />
                    </div>
                </div>

            </div>
        </section>
    )
}