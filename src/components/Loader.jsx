import style from './Loader.module.css'
import { StarIcon } from '@heroicons/react/24/outline';

export default function Loader() {
    return (
        <div className={style.container}>
            <div>
                <StarIcon className={style.loader} />
            </div>
        </div>
    )
}