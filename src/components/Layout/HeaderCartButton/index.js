import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';

import styles from './index.module.scss';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShowCart }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNubmer, item) => {
    return curNubmer + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  },[cartCtx.items])

  return (
    <button className={buttonClasses} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;
