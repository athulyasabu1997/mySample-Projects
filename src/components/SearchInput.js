import React from 'react';

function SearchInput({ onSearch }) {
  const handleSearch = (e) => {
onSearch(e.target.value)
  }
  return (
   <div>
    <input
    type='text'
    placeholder='Search input'
    onChange={handleSearch}
    />
   </div>
  );
}

export default SearchInput;
