import PropTypes from 'prop-types';
import CountryCard from './CountryCard';

function CountryCardContainer({ countries }) {
  return (
    <div className="card_container">
      { countries.map((country, index) => (
        <CountryCard
          key={index}
          name={country.name.common}
          flags={country.flags.png}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital}
        />
        ))
      }
    </div>
    
  );
}

CountryCardContainer.propTypes = {
  countries: PropTypes.array,
};

export default CountryCardContainer;