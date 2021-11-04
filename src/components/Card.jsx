import * as React from 'react';

import '../styles/Card-generation.css';


export default function Cards({ pokemon }) {
  const pokemonId = pokemon.url.match(/\d+/g).slice(1)[0];

  function handleClick(pokemonId) {
    console.log(pokemonId);
  };

  return (
    <div onClick={ () => handleClick(pokemonId) } className="card">
      <div>
        <img
          className="card-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.match(/\d+/g).slice(1)}.png`}
          alt={pokemon.name}
          style={{ width: '170px' }}
        />
      </div>
      <div className="card-content">
        <h2>{pokemon.name}</h2>
      </div>
    </div>
  );
}