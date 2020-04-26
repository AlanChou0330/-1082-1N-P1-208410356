const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById('backdrop');

const startAddMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMMovieButton = cancelAddMovieButton.nextElementSibling;
// console.log('cancelAddMovieButton', cancelAddMovieButton);
// console.log('confirmAddMMovieButton', confirmAddMMovieButton);

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMMovieButton.addEventListener('click', addMovieHandler);
