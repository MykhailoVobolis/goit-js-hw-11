// Запит до Pixabay API
export function getPictures(query) {
  const API_KEY = '42379891-9b2b3e5f2dd038df1d72b79a3';
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
