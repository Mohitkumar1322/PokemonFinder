import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
        const data = await res.json();

        const details = await Promise.all(
          data.results.map(async (poke) => {
            const res = await fetch(poke.url);
            return await res.json();
          })
        );

        setPokemons(details);
        setLoading(false);
      } catch (err) {
        setError(true);
      }
    }

    fetchData();
  }, []);

  const filtered = pokemons.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      typeFilter === 'All' ||
      p.types.some((t) => t.type.name === typeFilter.toLowerCase());
    return matchesSearch && matchesType;
  });

  if (error) return <p>Error fetching Pokémon.</p>;
  if (loading) return <p>Loading Pokémon...</p>;

  return (
    <div>
      <h1>Pokémon Explorer</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <TypeFilter setTypeFilter={setTypeFilter} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filtered.length === 0 ? (
          <p>No Pokémon found.</p>
        ) : (
          filtered.map((p) => <PokemonCard key={p.id} pokemon={p} />)
        )}
      </div>
    </div>
  );
}

export default App;
