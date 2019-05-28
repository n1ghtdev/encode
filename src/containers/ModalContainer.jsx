import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {},
  content: {
    minWidth: '320px',
    maxWidth: '420px',
    width: '100%',
    height: '500px',
    left: '50%',
    top: '50%',
    borderRadius: '2px',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow:
      '0px 8px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12)',
  },
};

Modal.setAppElement('#app');

const ModalContainer = ({ children, onRequestClose, isOpen }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="example"
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
