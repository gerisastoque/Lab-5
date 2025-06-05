import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/slices/charactersSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search characters by name..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;