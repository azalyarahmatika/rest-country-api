// import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import FilterInput from './FilterInput';

function InputContainer({onSearch, regions, onRegionChange}) {
  return (
    <div className='input_container'>
      <SearchInput onSearch={onSearch} />
      <FilterInput
        regions={regions}
        onRegionChange={onRegionChange} 
      />
    </div>
  )
}

InputContainer.propTypes = {
  onSearch: PropTypes.func.isRequired,
  country: PropTypes.string,
  regions: PropTypes.array.isRequired,
  onRegionChange: PropTypes.func.isRequired
};

export default InputContainer;