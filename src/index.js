import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// import throttle from 'lodash.throttle';

import fetchCountries from './fetchCountries';
const DEBOUNCE_DELAY = 300;

const form = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
// form.addEventListener('input', debounce(onInput, 300));
form.addEventListener('input', onInput);

function onInput(event) {
  debounce(
    fetchCountries(event.currentTarget.value)
      .then(users => {
        if (users.length > 10) {
          countryInfo.innerHTML = '';
          countryList.innerHTML = '';
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          return users;
        }
        if (users.length === 1) {
          countryList.innerHTML = '';
          renderUserList(users);
          return users;
        }
        countryInfo.innerHTML = '';
        fastRender(users);
        console.log(`Found:`, users.length, `country`);
        return users;
      })
      .then(res => {
        console.log(
          `Country name:`,
          res[0].name.official.toString(),
          ` Capital:`,
          res[0].capital.toString(),
          ` Population:`,
          res[0].population.toString(),
          ` languages:`,
          Object.values(res[0].languages).join(',').toString()
        );
      })
      .catch(error =>
        Notiflix.Notify.failure('Oops, there is no country with that name')
      ),
    DEBOUNCE_DELAY
  );
}

function fastRender(users) {
  const markup = users
    .map(user => {
      return `<li>      
      <p>
      <img src="${user.flags.png.toString()}" width="25" alt="png">
          <b>Country name</b>: ${user.name.official.toString()}</p>          
        </li>`;
    })
    .join('');
  countryList.innerHTML = markup;
}
function renderUserList(users) {
  const markup = users
    .map(user => {
      return `<li>      
      <p>
      <img src="${user.flags.png.toString()}" width="40" alt="png">
          <b>Country name</b>: ${user.name.official.toString()}</p>
          <p><b>Capital</b>: ${user.capital.toString()}</p>
          <p><b>Population</b>: ${user.population.toString()}</p>
          <p><b>languages</b>: ${Object.values(user.languages)
            .join(',')
            .toString()}</p>
        </li>`;
    })
    .join('');
  countryInfo.innerHTML = markup;
}

{
  /* <svg width="170" height="170">
  <use href="${user.flags.svg.toString()}"></use>
</svg>; */
}

// fetchCountries('jap')
//   .then(users => {
//     console.log(`All found = `, users);
//     return users;
//   })
//   .catch(error => console.log(error))
//   .then(res => {
//     console.log(
//       `Country name:` + res[0].name.official.toString(),
//       `languages:` + Object.values(res[0].languages).join(',').toString(),
//       `Capital:` + res[0].capital.toString(),
//       `Population:` + res[0].population.toString()
//     );
//   });

// console.log('Stop');

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// const LOCALSTORAGE_KEY = 'settings';
// localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));

// const savedSettings = localStorage.getItem(LOCALSTORAGE_KEY);
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// const res_1 = [...res[0].altSpellings];
// console.log(res_1);
// console.log(res_1.flatMap(my => [my]).join(' '));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));

// fetch('https://jsonplaceholder.typicode.com/albums')
//   //   .then(response => response.json())
//   .then(json => console.log(json));

// const BASE_URL = 'https://pokeapi.co/api/v2/';
// const GET_POKEMONS_URL = `${BASE_URL}pokemon`;

// fetch(BASE_URL)
//   .then(res => res.json())
//   .then(json => console.log(json));

// fetch('https://restcountries.com/v3.1/name/peru').then(res =>
//   Notiflix.Notify.success(`${res}`)
// );
// function myCountry(param) {
//   const BASE_URL = 'https://restcountries.com/v3.1/name/';
//   const URL_ASK = `${BASE_URL}${param}`;
//   fetch(URL_ASK).then(res => console.log(res));
// }

// myCountry('peru');
