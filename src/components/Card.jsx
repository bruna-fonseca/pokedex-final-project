import * as React from 'react';

import { useHistory } from 'react-router-dom';

import '../styles/Card-generation.css';


export default function Cards({ pokemon, pokemon_specie }) {
  const history = useHistory();
  var _url = pokemon_specie != null ? pokemon_specie.url : pokemon.pokemon.url;
  const pokemonId = _url.match(/\d+/g).slice(1)[0];

  function handleClick(pokemonId) {
    history.push(pokemonId)
  };

  return (
    <div onClick={ () => handleClick(pokemonId) } className="card">
      <div>
        <img
          className="card-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${_url.match(/\d+/g).slice(1)}.png`}
          alt={pokemon_specie != null ? pokemon_specie.name : pokemon.pokemon.name}
          style={{ width: '170px' }}
        />
      </div>
      <div className="card-content">
        <h2>{pokemon_specie != null ? pokemon_specie.name : pokemon.pokemon.name}</h2>
      </div>
    </div>
  );
}