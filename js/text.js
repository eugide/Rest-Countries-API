const countriesContainer = document.querySelector('#countries-container');
const inputElt = document.querySelector('#search-input');
var countriesArr = [];

async function getAllCountriesElt() {
  try {
    let response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);
    
    
    countriesArr = data;

   
    displayCountries(countriesArr);
  } catch (error) {
    console.log(error);
  }
}

function displayCountries(countries) {
  countriesContainer.innerHTML = ""; 

  
  countries.forEach(country => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${country.flags.png}" alt="Flag of ${country.name.common}"
      class="w-full h-1/3" />
      <h2 class="text-2xl">${country.name.common}</h2>
      <p>Population: ${country.population}</p>
      <p>FIFA Code: ${country.fifa}</p>
      <p>Capital: ${country.capital}</p>
      <p>IDD Root: ${country.idd.root}</p>
    `;
    
    
    countriesContainer.append(div);
  });
}

getAllCountriesElt();

inputElt.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    console.log(term)

    
    const filteredCountries = countriesArr.filter(country => country.name.common.toLowerCase().includes(term));
  
    displayCountries(filteredCountries);
});
