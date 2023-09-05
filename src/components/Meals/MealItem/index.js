import styles from './index.module.scss';

const MealItem = ({ name, description, price }) => {
  const fixedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>{fixedPrice}</span>
      </div>
      <div></div>
    </li>
  )
}

export default MealItem;
