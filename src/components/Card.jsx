import * as React from 'react';

import { useHistory } from 'react-router-dom';

import '../styles/Card-generation.css';


export default function Cards({ pokemon_specie }) {
  const history = useHistory();
  const pokemonId = pokemon_specie.url.match(/\d+/g).slice(1)[0];

  function handleClick(pokemonId) {
    history.push(`/pokemon/${pokemonId}`)
  };

  return (
    <div onClick={ () => handleClick(pokemonId) } className="card">
      <div>
        <img
          className="card-img"
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon_specie.url.match(/\d+/g).slice(1)}.png`}
          alt={pokemon_specie.name}
          style={{ width: '170px' }}
        />
      </div>
      <div className="card-content">
        <h2>{pokemon_specie.name}</h2>
      </div>
    </div>
  );
}