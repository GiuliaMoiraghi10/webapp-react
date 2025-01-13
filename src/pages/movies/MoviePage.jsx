import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardReview from '../../components/CardReview'
import style from './MoviePage.module.css'
import StarsVote from '../../components/StarsVote'

export default function MoviePage() {

    const [movie, setMovie] = useState(null)

    const { id } = useParams()

    function fetchMovie() {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])

    return (
        movie ? <>
            <section className={style.movie_description}>
                <div>
                    <img src={movie.image} alt="" />
                </div>
                <div>
                    <h1 className={style.title}>{movie.title}</h1>
                    <h3 className={style.director}>{movie.director}</h3>
                    <p className={style.abstract}>{movie.abstract}</p>
                </div>
            </section>
            <section>
                <div className={style.reviews}>
                    <h2>Tutte le recensioni</h2>
                    <div>
                        Voto medio: <StarsVote vote={movie.avg_vote} />
                    </div>
                </div>
                {movie.reviews.length ?
                    <ul>
                        {movie.reviews.map(review => (
                            <CardReview review={review} key={review.id} />
                        ))}
                    </ul> :
                    <div>Nessuna recensione</div>
                }
                <div>
                    <div>
                        <strong>Aggiungi recensione</strong>
                    </div>
                </div>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" placeholder='Anonimo' name='name' id='name' />
                        </div>
                        <div>
                            <label htmlFor="review">Recensione</label>
                            <textarea name="review" id="review" rows="5" placeholder='Scrivi la tua recensione...'></textarea>
                        </div>
                        <div>
                            <label htmlFor="voto">Voto</label>
                            <select name="vote" id="vote">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button>Invia</button>
                    </form>
                </div>
            </section>
        </> :
            <div>Caricamento...</div>
    )
}