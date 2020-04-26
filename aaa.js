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

const renderNewMovieElement = (title, web, content) => {
  const newMovieElement = document.createElement('div');
  newMovieElement.className = 'col-md-6 col-lg-4 mb-5 mb-lg-5';
  newMovieElement.innerHTML = `
  <div class="ftco-media-1">
    <div class="ftco-media-1-inner">
      <a href="" class="d-inline-block mb-4"
        ><img
        class=""
          width="330px"
          height="437px"
          src="${web}"
          alt="Free website template by Free-Template.co"
      /></a>
      <div class="container ftco-media-details">
        <h3>${title}</h3>
        <p>${content}</p>
        <br />
        <div class="btn-group">
          <a href="${web}"
            ><button
              width="50px"
              height="10px"
              class="btn btn-danger"
              type="button"
            >
              Go
            </button></a
          >
          <button
            width="500px"
            height="100px"
            class="btn btn-warning"
            type="button"
          >
            <a href="./a.html"><i class="far fa-edit"></i></a>
          </button>
          <button
            width="500px"
            height="100px"
            class="btn btn-success"
            type="button"
          >
            <a href="./a.html"><i class="fas fa-trash-alt"></i></a>
          </button>
        </div>
      </div>
    </div>
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
  const webValue = userInputs[1].value;
  const contentValue = userInputs[2].value;
  // console.log(titleValue, contentValue.webValue);

  if (
    titleValue.trim() === '' ||
    contentValue === '' ||
    webValue === '' ||
    +webValue < 1 ||
    +webValue > 5
  ) {
    alert('Please enter valid value (web between 1 to 5)');
    return;
  }

  const newMovie = {
    title: titleValue,
    web: webValue,
    content: contentValue,
  };

  movies.push(newMovie);
  // console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.web, newMovie.content);
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMMovieButton.addEventListener('click', addMovieHandler);
