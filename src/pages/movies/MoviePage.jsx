import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardReview from '../../components/CardReview'

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
            <section>
                <div>
                    <img src={movie.image} alt="" />
                </div>
                <div>
                    <h1>{movie.title}</h1>
                    <h3>{movie.director}</h3>
                </div>
                <div>
                    <p>{movie.abstract}</p>
                </div>
            </section>
            <section>
                <div>
                    <h2>Tutte le recensioni</h2>
                    <div>
                        <strong>Media: {movie.avg_vote}</strong>
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
                        <p>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" placeholder='Anonimo' name='name' id='name' />
                        </p>
                        <p>
                            <label htmlFor="voto">Voto</label>
                            <select name="vote" id="vote">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                        </p>
                        <button>Invia</button>
                    </form>
                </div>
            </section>
        </> :
            <div>Caricamento...</div>
    )
}