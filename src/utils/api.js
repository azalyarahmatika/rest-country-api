const BASE_URL = 'https://restcountries.com/v3.1';
 
async function getCountries() {
  try {
    const response = await fetch(`${BASE_URL}/all`);
    const countries = await response.json();
    return { error: false, data: countries };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

async function getCountryName(name) {
  try {
    const response = await fetch(`${BASE_URL}/name/${name}`);
    const countries = await response.json();
    return { error: false, data: countries };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

async function getCountryRegion(region) {
  try {
    const response = await fetch(`${BASE_URL}/region/${region}`);
    const countries = await response.json();
    return { error: false, data: countries };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

async function getFilteredCountry(cca3) {
  try {
    const response = await fetch(`${BASE_URL}/alpha?codes=${cca3}`);
    const countries = await response.json();
    return { error: false, data: countries };
  } catch (error) {
    return { error: true, message: error.message };
  }
}

export {
  getCountries,
  getCountryName,
  getCountryRegion,
  getFilteredCountry
};