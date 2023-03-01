import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// import throttle from 'lodash.throttle';

const DEBOUNCE_DELAY = 300;

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// const BASE_URL = 'https://pokeapi.co/api/v2/';
// const GET_POKEMONS_URL = `${BASE_URL}pokemon`;

// fetch(BASE_URL)
//   .then(res => res.json())
//   .then(json => console.log(json));

// fetch('https://restcountries.com/v3.1/name/peru').then(res =>
//   Notiflix.Notify.success(`${res}`)
// );
function myCountry(param) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';
  const URL_ASK = `${BASE_URL}${param}`;
  fetch(URL_ASK).then(res => console.log(res));
}

myCountry('peru');
