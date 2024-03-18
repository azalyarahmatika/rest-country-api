import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';

function SearchInput({ onSearch }) {

  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="input_search_container">
      <input
        className="input_search"
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
      <BiSearch className="search-icon" />
    </div>
  );
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchInput;
