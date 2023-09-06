import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const Modal = (props) => {
  const portalElement = document.getElementById('overlays');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal;
