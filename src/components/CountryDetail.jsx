import PropTypes from 'prop-types';
import BorderCountry from './BorderCountry';

function CountryDetail({ country }) {
  const { 
    name, 
    flags, 
    population, 
    region,
    subregion, 
    capital, 
    tld, 
    currencies,
    languages,
    borders
  } = country[0];

  const nativeNames = [];
  for (let langCode in name.nativeName) {
    const officialName = name.nativeName[langCode].common;
    nativeNames.push(officialName);
  }
  const officialNamesString = nativeNames.map(nativeName => nativeName).join(', ');

  const moneyCurrencies = [];
  for (let curr in currencies) {
    const currName = currencies[curr].name;
    moneyCurrencies.push(currName);
  }
  const currNameJoin = moneyCurrencies.map(moneyCurrency => moneyCurrency).join(', ');

  const countryLanguages = [];
  for (let lang in languages) {
    const langName = languages[lang];
    countryLanguages.push(langName);
  }
  const countryLanguagesJoin = countryLanguages.map(countryLanguage => countryLanguage).join(', ');

  return (
    <div className="card_detail">
      <div className='card_img'>
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div className="card_info_detail">
        <h2>{name.common}</h2>
        <div className='country_name'>
          <div className='left_info'>
            <p><span>Native Name:</span> {officialNamesString}</p>
            <p><span>Population:</span> {population.toLocaleString()}</p>
            <p><span>Region:</span> {region}</p>
            <p><span>Sub Region:</span> {subregion}</p>
            <p><span>Capital:</span> {capital}</p>
          </div>
          <div className='right_info'>
            <p><span>Top Level Domain:</span> {tld}</p>
            <p><span>Currencies:</span> {currNameJoin}</p>
            <p><span>Languages:</span> {countryLanguagesJoin}</p>
          </div>
        </div>
        <div className='border_countries'>
          <p><span>Border Countries:</span></p>
          {borders && borders.length > 0 && (
            <span className='border_country_container'>
              {borders.map((borderCountry, index) => (
                <BorderCountry key={index} country={borderCountry} />
              ))}
            </span>
          )} 
          {!borders && <span>Not available</span>}
        </div>
      </div>
    </div>
    
  );
}

CountryDetail.propTypes = {
  country: PropTypes.array.isRequired,
};

export default CountryDetail;