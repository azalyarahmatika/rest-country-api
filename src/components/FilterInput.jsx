import PropTypes from 'prop-types';

function FilterInput({ regions, onRegionChange }) {
  function onChange(event) {
    onRegionChange(event.target.value);
  }

  return (
    <>
      <label htmlFor="region"></label>
      <select className="filter_input" id="region" onChange={onChange} >
      <option value="">Filter By Region</option>
      {regions.map((region, index) => (
        <option key={index} value={region}>{region}</option>
      ))}
    </select>
    </>
  );
}

FilterInput.propTypes = {
  regions: PropTypes.array.isRequired,
  onRegionChange: PropTypes.func.isRequired
};

export default FilterInput;
