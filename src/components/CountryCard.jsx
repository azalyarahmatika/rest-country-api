import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CountryCard({name, flags, population, region, capital}) {
  const encodedName = encodeURIComponent(name);
  return (
    <div className="card">
      <Link to={`/country/${encodedName}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={flags} alt={name} />
        <div className="card_info">
          <h2>{name}</h2>
          <p>Population:<span> {population.toLocaleString()}</span></p>
          <p>Region:<span> {region}</span></p>
          <p>Capital:<span> {capital}</span></p>
        </div>
      </Link>
    </div>
  )
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flags: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.array
};

export default CountryCard;