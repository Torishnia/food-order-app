import { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';

import styles from './index.module.scss';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNubmer, item) => {
    return curNubmer + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;
