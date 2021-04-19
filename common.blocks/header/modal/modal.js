let modal = document.getElementById('modal');
let modalButton = document.getElementById('modal-button');
let modalOpenButton = document.getElementById('modal-open-button');
let modalCloseButton = document.getElementById('modal-close-button');

let menuLinks = document.querySelectorAll('.modal-menu-link');

modalButton.addEventListener('click', toggleMenu);

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
