import React, { useState } from 'react';
import Modal from 'react-modal';

import './modalWindow.scss';

Modal.setAppElement('#root');

export const ModalWindow = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return(
    <>
      { !modalIsOpen ?
        <button onClick={() => setModalIsOpen(true)} className="modal-button">
          Open
        </button> :
        <button onClick={() => setModalIsOpen(false)} className="modal-button">
          Close
        </button>
      }
      <Modal 
        isOpen={modalIsOpen}
        style={{
          overlay: {
            // position: 'fixed',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            // backgroundColor: 'grey',
            // backgroundColor: '#5f5f5f',
            bottom: 0,
            height: '100vh',
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            // transform: 'translateY(-100%)',
            // transition: 'transform 0.2s',
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
            backgroundColor: '#5f5f5f',
            // margin: '100px auto'
          }
        }}  
      >
        {/* <div id="modal" className="modal"> */}
          <div className="modal-content">
            <a href="/#" className="modal-menu-link" title="Home">Home</a>
            <a href="/#features" className="modal-menu-link" title="What do we offer?">Our Features</a>
            <a href="/#pricing" className="modal-menu-link" title="Price">Pricing</a>
            <a href="/#about-us" className="modal-menu-link" title="About Us">About Us</a>
            <a href="/#carrers" className="modal-menu-link" title="Carrers at New Kids English">Carrers</a>
          </div>
        {/* </div> */}
      </Modal>
    </>
  );
};
