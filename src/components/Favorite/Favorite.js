import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss'

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <PageTitle>FAVORITE</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default Favorite;