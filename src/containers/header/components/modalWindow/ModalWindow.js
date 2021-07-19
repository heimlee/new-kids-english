import React, { useState } from 'react';
import Modal from 'react-modal';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import './modalWindow.scss';

Modal.setAppElement('#root');

export const ModalWindow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return(
    <>
      { !modalIsOpen ?
        <button onClick={() => setModalIsOpen(true)} className="modal-button">
          <MenuIcon />
        </button> :
        <button onClick={() => setModalIsOpen(false)} className="modal-button">
          <CloseIcon />
        </button>
      }
      <Modal 
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            height: '100vh',
            width: '100%'
          },
          content: {
            inset: 0,
            height: '100vh',
            borderRadius: 0,
            border: 'none',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#5f5f5f'
          }
        }}  
      >
        <div className="modal-content">
          <a href="/#" className="modal-menu-link" title="Home" onClick={() => setModalIsOpen(false)}>Home</a>
          <a href="/#features" className="modal-menu-link" title="What do we offer?" onClick={() => setModalIsOpen(false)}>Our Features</a>
          <a href="/#pricing" className="modal-menu-link" title="Price" onClick={() => setModalIsOpen(false)}>Pricing</a>
          <a href="/#about-us" className="modal-menu-link" title="About Us" onClick={() => setModalIsOpen(false)}>About Us</a>
          <a href="/#carrers" className="modal-menu-link" title="Carrers at New Kids English" onClick={() => setModalIsOpen(false)}>Carrers</a>
        </div>
      </Modal>
    </>
  );
};
