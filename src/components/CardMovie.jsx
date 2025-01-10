import { Link } from 'react-router-dom'
import style from './CardMovie.module.css'

export default function CardMovie({ movie }) {

    const { id, title, director, genre, release_year, abstract, image, avg_vote } = movie;

    return (
        <section className={style.card_box}>
            <div className={style.card}>
                <div className={style.col_4}>
                    <img src={image} className={style.img} alt="" />
                    <h4 className={style.title}>{title}</h4>
                    <h5 className={style.director}>{director}</h5>
                    <p className={style.genre}><strong>Genere: </strong>{genre}</p>
                    <p className={style.release_year}><strong>Anno:</strong> {release_year}</p>
                    <p className={style.abstract}><strong>Trama: </strong>{abstract}</p>
                    <div className={style.avg_vote}><strong>Voto: </strong>{avg_vote}</div>
                    <Link to={`/movies/${id}`} className={style.link}>Maggiori Info</Link>
                </div>
            </div>
        </section>
    )
}