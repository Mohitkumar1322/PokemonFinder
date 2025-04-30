import React from 'react';

const types = [
  'All', 'normal', 'fire', 'water', 'grass',
  'electric', 'ice', 'fighting', 'poison', 'ground',
  'flying', 'psychic', 'bug', 'rock', 'ghost',
  'dark', 'dragon', 'steel', 'fairy'
];

function TypeFilter({ setTypeFilter }) {
  return (
    <select
      onChange={(e) => setTypeFilter(e.target.value)}
      style={{ padding: '10px', margin: '10px' }}
    >
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}

export default TypeFilter;
