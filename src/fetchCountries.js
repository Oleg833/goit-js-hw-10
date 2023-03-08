export default fetchCountries;

import axios from 'axios';

async function fetchCountries(param) {
  const BASE_URL = `https://restcountries.com/v3.1/name/${param}?fields=name,capital,population,flags,languages`;

  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// async function fetchCountries1(param) {
//   const BASE_URL = `https://restcountries.com/v3.1/name/${param}?fields=name,capital,population,flags,languages`;
//   // const URL_ASK = `https://restcountries.com/v2/name/${param}?fields=name,capital,currencies`;

//   const response = await fetch(BASE_URL);
//   console.log(response);
//   const res = await response.json();

//   return res;
// }

// fetch(URL_ASK).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }
//   return response.json();
// });

// async function countryImport(param) {
//   const BASE_URL = 'https://restcountries.com/v3.1/name/';
//   const URL_ASK = `${BASE_URL}${param}`;

//   const response = await fetch(URL_ASK);
//   const res = await response.json();
//   const res_1 = [...res[0].altSpellings];
//   console.log(res_1);
//   console.log(res_1.flatMap(my => [my]).join(' '));
//   return res_1.flatMap(my_1 => [my_1]).join(' ');
// }

// let myRes;

// return
//   fetch(URL_ASK)
//     .then(response => response.json())
//     .then(res => [...res[0].altSpellings])
//     .then(res => {
//       console.log(res);
//       console.log(res.flatMap(my => [my]).join(' '));
//       return res.flatMap(my => [my]).join(' ');
//     });

// .then(reses => reses.map(my => [...my]))
// .then(res => console.log(res));

//   fetch(URL_ASK)
//     .then(response => response.text())
//     .then(res => console.log(res));
