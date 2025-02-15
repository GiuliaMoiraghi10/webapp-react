import style from "./FormReviews.module.css"
import axios from "axios"
import { useState, useContext } from 'react'
import GlobalContext from "../context/globalContext"

// creo variabile con elementi vuoti, che poi riempirà l'user
const initialFormData = {
    vote: 1,
    name: '',
    text: ''
}

export default function FormReviews({ id, onSuccess = () => { } }) {

    // creo variabile di stato per compilazione form
    const [formData, setFormData] = useState(initialFormData) //passo variabile con dati vuoti
    const [validForm, setValidForm] = useState(true) //il form è valido quando lo stato della variabile è true

    const { setIsLoading } = useContext(GlobalContext)

    function onFormChange(e) { // cambio valori del form
        const { value, name: propName } = e.target
        console.log(value, propName)

        setFormData({
            ...formData,
            [propName]: value
        })
    }

    //funzione per impedire invio del form + compilazione corretta
    function storeReview(e) {
        e.preventDefault()
        setValidForm(true)
        console.log('Recensione salvata sul server')

        const data = {
            text: formData.text || undefined,
            name: formData.name,
            vote: parseInt(formData.vote)
        }

        // // validazione client
        // if (!data.name || !data.vote || !data.vote < 1 || data.vote > 5) {
        //     console.log('Il form non è valido')
        //     setValidForm(false) //condizione falsa, quindi non è valido
        //     return
        // }
        setIsLoading(true)
        // chiamata axios x recuperare reviews esistenti + inserimento recensione nuova da form
        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, data)
            .then(res => {
                console.log(res)
                setFormData(initialFormData) // se chiamata non è corretta, ripristino form con valori vuoti
                onSuccess()
            }).catch(err => {
                console.log(err)
                setValidForm(false)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (<>
        <div>
            <div className={style.title_form}>
                <strong>Aggiungi recensione</strong>
            </div>
        </div>
        <div className={style.form}>
            <form onSubmit={storeReview}>
                <div className={style.nome}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder='Anonimo' name='name' id='name' value={formData.name} onChange={onFormChange} className={style.input_nome} />
                </div>
                <div>
                    <label htmlFor="text"></label>
                    <textarea name="text" id="text" rows="5" placeholder='Scrivi la tua recensione...' value={formData.text} onChange={onFormChange} className={style.input_text}></textarea>
                </div>
                <div>
                    <label htmlFor="vote">Voto</label>
                    <select name="vote" id="vote" className={style.input_vote} value={formData.vote} onChange={onFormChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                {validForm === false && <div>I dati non sono validi</div>}
                <button className={style.btn}>Invia</button>
            </form>
        </div>
    </>
    )
}