import { Link } from 'react-router-dom'
import style from './CardMovie.module.css'

export default function CardMovie({ movie }) {

    const { id, title, director, genre, release_year, abstract, image } = movie;

    return (
        <section className={style.card_box}>
            <div className={style.card}>
                <div className={style.col_4}>
                    <img src={image} className={style.img} alt="" />
                    <h4>{title}</h4>
                    <h5>{director}</h5>
                    <p>{genre}</p>
                    <p>{release_year}</p>
                    <p>{abstract}</p>
                    <Link to={`/movies/${id}`} className={style.link}>Maggiori Info</Link>
                </div>
            </div>
        </section>
    )
}