import styles from './index.module.scss';
import mealsImg from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles.main_image}>
        <img src={mealsImg} alt='A tabel full of delicious food!' />
      </div>
    </>
  )
}

export default Header;
