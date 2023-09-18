import { useContext, useState } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './index.module.scss';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = ({ onHideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  }

  const cartItems = (
    <ul className={styles.cart_items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
         />
      ))}
    </ul>
  )

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles.button_close} onClick={onHideCart}>
        Close
      </button>
      {hasItems && 
        <button className={styles.button_order} onClick={orderHandler}>
          Order
        </button>
      }
    </div>
  )

  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout &&  <Checkout onCancel={onHideCart}/>}
      {!isCheckout && modalActions}
    </Modal>
  )
}

export default Cart;
