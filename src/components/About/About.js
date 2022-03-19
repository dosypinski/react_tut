import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>ABOUT</PageTitle>
      <p>Lorem Ipsum</p>
    </div>
  );
};

export default About;