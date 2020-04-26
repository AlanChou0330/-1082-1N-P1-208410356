const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById('backdrop');

const startAddMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMMovieButton = cancelAddMovieButton.nextElementSibling;
// console.log('cancelAddMovieButton', cancelAddMovieButton);
// console.log('confirmAddMMovieButton', confirmAddMMovieButton);

const userInputs = addMovieModal.querySelectorAll('input');

const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'black';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toggleBackdrop();
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <image src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2> ${title} </h2>
      <p> ${rating}/5 stars </p>
    </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
  updateUI();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  // console.log(titleValue, imageUrlValue.ratingValue);

  if (
    titleValue.trim() === '' ||
    imageUrlValue === '' ||
    ratingValue === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid value (reting between 1 to 5)');
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  // console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMMovieButton.addEventListener('click', addMovieHandler);
