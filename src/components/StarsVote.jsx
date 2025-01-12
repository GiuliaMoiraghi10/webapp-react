import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import style from './StarsVote.module.css'

export default function StarsVote({ vote = 0 }) {

    return (
        <div>
            {[1, 2, 3, 4, 5].map((n) => {
                return n <= vote ?
                    <StarSolid key={n} className={style.stars} /> :
                    <StarIcon key={n} className={style.stars} />
            })}
        </div>
    )
}
