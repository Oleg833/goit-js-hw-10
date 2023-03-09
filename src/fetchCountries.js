export default fetchCountries;

import axios from 'axios';

async function fetchCountries(param) {
  const BASE_URL = `https://restcountries.com/v3.1/name/${param}?fields=name,capital,population,flags,languages`;
  const PIXA_URL = `https://pixabay.com/api/?key=34212854-f6457ae4e5e1013dd0f507693&q=${param}&image_type=photo&orientation=horizontal&safesearch=true`;
  const PIXA_ORIG = `https://pixabay.com/api/?key=34212854-f6457ae4e5e1013dd0f507693&q=yellow+flowers&image_type=photo&pretty=true`;

  try {
    const response = await axios.get(BASE_URL);
    console.log(response.data);
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
