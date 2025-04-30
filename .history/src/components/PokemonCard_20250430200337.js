import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px',
      width: '150px',
      textAlign: 'center',
      backgroundColor: '#ff9f9',
      
    }}>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>
        Type: {pokemon.types.map(t => t.type.name).join(', ')}
      </p>
    </div>
  );
}

export default PokemonCard;
