import React from 'react';

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      style={{ padding: '10px', margin: '10px', width: '200px' ,}}
    />
  );
}

export default SearchBar;
