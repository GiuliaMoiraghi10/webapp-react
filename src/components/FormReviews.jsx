export default function FormReviews() {
    return (<>
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
    </>
    )
}