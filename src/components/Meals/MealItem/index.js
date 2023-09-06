import { useContext } from 'react';
import MealItemForm from '../MealItemForm';

import styles from './index.module.scss';
import CartContext from '../../../store/cart-context';

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const fixedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>{fixedPrice}</span>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem;
