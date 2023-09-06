import styles from './index.module.scss';
import mealsImg from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles.main_image}>
        <img src={mealsImg} alt='A tabel full of delicious food!' />
      </div>
    </>
  )
}

export default Header;
