import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getFilteredCountry } from '../utils/api';

function BorderCountry({ country }) {
  const [codeToCountry, setCodeToCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFilteredCountry(country)
      .then(({ data, error }) => {
        if (error) {
          setError(error);
        } else {
          setCodeToCountry(data[0].name.common);
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [country]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Link to={`/country/${codeToCountry}`} style={{ textDecoration: 'none' }}>
      <button className="border_button">{country}</button>
    </Link>
  );
}

BorderCountry.propTypes = {
  country: PropTypes.string.isRequired,
};

export default BorderCountry;
