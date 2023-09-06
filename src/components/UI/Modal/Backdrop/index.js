import styles from './index.module.scss';

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />
}

export default Backdrop;
