import { Button } from 'components/atoms/Button/Button.js';
import React from 'react';
import { ModalWrapper } from './Modal.styles.js';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
