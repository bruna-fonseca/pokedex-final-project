import * as React from 'react';

import { useHistory } from 'react-router-dom';

import '../styles/Card-generation.css';


export default function Cards({ pokemon }) {
  const history = useHistory();
  const pokemonId = pokemon.url.match(/\d+/g).slice(1)[0];

  function handleClick(pokemonId) {
    history.push(pokemonId)
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