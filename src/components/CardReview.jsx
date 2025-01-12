export default function CardReview({ review }) {

    const { vote, text, name } = review

    return (
        <div>
            <p>{text}</p>
            <div>
                <strong>{vote}</strong>
            </div>
            <div>
                Recensione di {name}
            </div>
        </div>
    )
}