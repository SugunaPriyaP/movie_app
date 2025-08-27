import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = 'Search movies...', className = '' }) => {
  return (
    <div className={`search-container ${className}`}>
      <input 
        className='search-input'
        type='text'
        placeholder={placeholder}
        value={searchTerm}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
