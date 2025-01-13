import StarsVote from "./StarsVote"
import style from "./CardReview.module.css"

export default function CardReview({ review }) {

    const { vote, text, name } = review

    return (
        <div className={style.review_card}>
            <p className={style.review}>{text}</p>
            <div className={style.vote}>
                <strong>Voto:</strong>
                <StarsVote vote={vote} />
            </div>
            <div className={style.name}>
                Recensione di {name}
            </div>
        </div>
    )
}