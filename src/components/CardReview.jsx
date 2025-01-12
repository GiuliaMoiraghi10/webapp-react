import StarVote from "./StarsVote"

export default function CardReview({ review }) {

    const { vote, text, name } = review

    return (
        <div>
            <p>{text}</p>
            <div>
                <strong>Voto</strong>
                <StarVote vote={vote} />
            </div>
            <div>
                Recensione di {name}
            </div>
        </div>
    )
}