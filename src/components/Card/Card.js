import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { favoriteToggle, removeCard } from 'src/redux/cardsRedux';
import { useSelector } from 'react-redux';

const Card = props => {
    const dispatch = useDispatch();
    const cardId = props.cardId;

    const toggleHandler = e => {
        e.preventDefault();
        dispatch(favoriteToggle(cardId))
    };
    const removeHandler = e => {
        e.preventDefault();
        dispatch(removeCard(cardId))
    }
    const card = useSelector(state => state.cards.filter(card => card.id === cardId));
    const isFavorite = card[0].isFavorite;
    return (
        <li className={styles.card}>{props.title}
            <div>
                <FontAwesomeIcon onClick={toggleHandler} className={clsx(styles.icon,  {[styles.isFavorite] : isFavorite })} icon={faStar} />
                <FontAwesomeIcon onClick={removeHandler} className={styles.icon} icon={faTrash} />
            </div>
        </li>
    );
};

export default Card;