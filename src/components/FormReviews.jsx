import style from "./FormReviews.module.css"

export default function FormReviews() {
    return (<>
        <div>
            <div className={style.title_form}>
                <strong>Aggiungi recensione</strong>
            </div>
        </div>
        <div className={style.form}>
            <form action="">
                <div className={style.nome}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" placeholder='Anonimo' name='name' id='name' className={style.input_nome} />
                </div>
                <div>
                    <textarea name="review" id="review" rows="5" placeholder='Scrivi la tua recensione...' className={style.input_text}></textarea>
                </div>
                <div>
                    <label htmlFor="voto">Voto</label>
                    <select name="vote" id="vote" className={style.input_vote}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button className={style.btn}>Invia</button>
            </form>
        </div>
    </>
    )
}