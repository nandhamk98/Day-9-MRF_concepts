const xhr = new XMLHttpRequest();

//api to get all the countries related data
xhr.open("GET", "https://restcountries.eu/rest/v2/all");

//onloading the reponse is loaded to console
xhr.onload = () => {
  data = JSON.parse(xhr.response);
  getAsianCountries(data);
  getCountriesWith2lacPop(data);
  getCountryInfo(data);
  totalPopulation(data);
  getCountriesUsingUSDollars(data);
};

xhr.send();

//1)  Get all the countries from Asia continent /region using Filter function

const getAsianCountries = (data) => {
  let asianCountries = data.filter((val) => val.region === "Asia");
  for (let asianCountry of asianCountries) {
    console.log(asianCountry);
  }
};

//output:
// {name: 'Afghanistan', topLevelDomain: Array(1), alpha2Code: 'AF', alpha3Code: 'AFG', callingCodes: Array(1), …}
// alpha2Code: "AF"
// alpha3Code: "AFG"
// altSpellings: (2) ['AF', 'Afġānistān']
// area: 652230
// borders: (6) ['IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN']
// callingCodes: ['93']
// nativeName: "افغانستان"
// numericCode: "004"
// population: 27657145
// region: "Asia"
// capital: "Kabul"
// cioc: "AFG"
// currencies: [{…}]
// demonym: "Afghan"
// flag: "https://restcountries.eu/data/afg.svg"
// gini: 27.8
// languages: (3) [{…}, {…}, {…}]
// latlng: (2) [33, 65]
// name: "Afghanistan"
//....

//2)Get all the countries with a population of less than 2 lakhs using Filter function

const getCountriesWith2lacPop = (data) => {
  let countries = data.filter((val) => val.population < 200000);
  for (let country of countries) {
    console.log(country);
  }
};

//output:
// {name: 'Åland Islands', topLevelDomain: Array(1), alpha2Code: 'AX', alpha3Code: 'ALA', callingCodes: Array(1), …}
// alpha2Code: "AX"
// alpha3Code: "ALA"
// altSpellings: (4) ['AX', 'Aaland', 'Aland', 'Ahvenanmaa']
// area: 1580
// borders: []
// callingCodes: ['358']
// capital: "Mariehamn"
// cioc: ""
// currencies: [{…}]
// demonym: "Ålandish"
// flag: "https://restcountries.eu/data/ala.svg"
// gini: null
// languages: [{…}]
// latlng: (2) [60.116667, 19.9]
// name: "Åland Islands"
// nativeName: "Åland"
// numericCode: "248"
// population: 28875
// region: "Europe"
// ...

//3) Print the following details name, capital, flag using forEach function

const getCountryInfo = (data) => {
  data.forEach((country) => {
    console.log(`Name : ${country.name}`);
    console.log(`Flag : ${country.flag}`);
    console.log(`Capital : ${country.capital}`);
    console.log("------------------------------");
  });
};

//output:
// Name: Afghanistan;
//  Flag : https://restcountries.eu/data/afg.svg
//  Capital : Kabul
//  ------------------------------
//  Name : Åland Islands
//  Flag : https://restcountries.eu/data/ala.svg
//  Capital : Mariehamn
//...

//4) Print the total population of countries using reduce function

const totalPopulation = (data) => {
  let totalpop = data
    .map((countryPop) => countryPop.population)
    .reduce((pre, cur) => pre + cur);

  console.log(totalpop);
};

//output: 7349137231

//5. Print the country which uses US Dollars as currency.

const getCountriesUsingUSDollars = (data) => {
  let countries = data.filter(
    (country) =>
      country.currencies.filter((currency) => currency.code === "USD")
        .length === 1
  );
  for (let country of countries) {
    console.log(country.name);
  }
};

//output:
// American Samoa
// Bonaire, Sint Eustatius and Saba
// British Indian Ocean Territory
// United States Minor Outlying Islands
// Virgin Islands (British)
// Virgin Islands (U.S.)
// Cambodia
// Ecuador
// El Salvador
//....
