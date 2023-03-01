export default countryImport;

function countryImport(param) {
  const arr = {};

  fetch('https://restcountries.com/v3.1/name/${param}').then(res =>
    console.log(res)
  );
}
