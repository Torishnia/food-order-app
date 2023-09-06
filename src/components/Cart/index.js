import Modal from '../UI/Modal';
import styles from './index.module.scss';

const Cart = ({ onHideCart }) => {
  const cartItems = (
    <ul className={styles.cart_items}>
      {[{ id: '1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button_close} onClick={onHideCart}>Close</button>
        <button className={styles.button_order}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;
