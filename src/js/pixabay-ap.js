// Додавання бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { markupGallery } from './render-functions.js';
import { list } from './render-functions.js';

const fetcImageForm = document.querySelector('form');
const inputSearchImage = document.querySelector('#select-image');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

fetcImageForm.addEventListener('submit', fetchImage);

function fetchImage(event) {
  event.preventDefault();
  list.innerHTML = '';

  loader.style.display = 'block';

  const API_KEY = '42379891-9b2b3e5f2dd038df1d72b79a3';
  const BASE_URL = 'https://pixabay.com/api/';
  const encodedSearch = inputSearchImage.value;

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: encodedSearch,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  fetch(`${BASE_URL}?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(params => {
      if (!params.hits.length) {
        // Ініціаналізація бібліотеки iziToast
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          transitionIn: 'bounceInDown',
          theme: 'dark',
          messageColor: '#ffffff',
          messageSize: 16,
          messageLineHeight: 24,
          color: '#ef4040',
          progressBar: false,
          position: 'topRight',
          maxWidth: 432,
        });
      }
      markupGallery(params.hits);
      loader.style.display = 'none';

      fetcImageForm.reset();
    })
    .catch(error => console.log(error))

    .finally(() => (loader.style.display = 'none'));
}
