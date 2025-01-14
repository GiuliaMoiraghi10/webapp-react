import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardReview from '../../components/CardReview'
import style from './MoviePage.module.css'
import StarsVote from '../../components/StarsVote'
import FormReviews from '../../components/FormReviews'
import GlobalContext from '../../context/globalContext'

export default function MoviePage() {

    const { setIsLoading } = useContext(GlobalContext)

    const [movie, setMovie] = useState(null)

    const { id } = useParams()

    function fetchMovie() {

        setIsLoading(true)

        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
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
                <FormReviews id={id} onSuccess={fetchMovie} />
            </section>
        </> :
            <div>Caricamento...</div>
    )
}