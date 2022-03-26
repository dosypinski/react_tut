import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'
import Card from 'components/Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from 'src/redux/cardsRedux';

const Favorite = () => {
  const cards = useSelector(state => getFavoriteCards(state));

  return (
    <div className={styles.favorite}>
      <PageTitle>FAVORITE</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card key={card.id} cardId={card.id} title={card.title}  />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;