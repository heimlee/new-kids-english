import React from 'react';

import './modal.scss';

export const Modal = () => {
  let modal = document.getElementById('modal');
  // let modalButton = document.getElementById('modal-button');
  let modalOpenButton = document.getElementById('modal-open-button');
  let modalCloseButton = document.getElementById('modal-close-button');
  
  let menuLinks = document.querySelectorAll('.modal-menu-link');
  
  // modalButton.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
    if (modal.classList.contains('show-modal')) {
      modal.classList.remove('show-modal');
      modalCloseButton.style.display = 'none';
      modalOpenButton.style.display = 'block';
    } else {
      modal.classList.add('show-modal');
      modalCloseButton.style.display = 'block';
      modalOpenButton.style.display = 'none';
    }
  }
  
  menuLinks.forEach(
    function(menuLink) {
      menuLink.addEventListener('click', toggleMenu);
    }
  );

  return(
    <button id="modal-button" className="modal-button" onClick={toggleMenu}>
      <span id="modal-open-button" className="modal-button__icon menu-icon">
        <i className="fas fa-bars"></i>
      </span>
      <span id="modal-close-button" className="modal-button__icon close-icon">
        <i className="fas fa-times"></i>
      </span>
    </button>
  );
};
