import React, { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';
 
import '../styles/DetailsCard.css';

export default function DetailsCard({ pokemonInfo }) {
  const { definedTheme } = useContext(ThemeContext);

  return (
    <div className="card-details">
      <div className="card-top">
        <h2>{pokemonInfo.species.name}</h2>
          {pokemonInfo.types.map(({ type }, index) => (
            <span className="types" key={index}>{type.name}</span>
            ))}
      </div>
      <div style={{ color: definedTheme.typography }} className="card-stats">
        <p><strong>hp: </strong>{pokemonInfo.stats[0].base_stat}</p>
        <p><strong>ataque: </strong>{pokemonInfo.stats[1].base_stat}</p>
        <p><strong>defesa: </strong>{pokemonInfo.stats[2].base_stat}</p>
        <p><strong>s-ataque: </strong>{pokemonInfo.stats[3].base_stat}</p>
        <p><strong>s-defesa: </strong>{pokemonInfo.stats[4].base_stat}</p>
        <p><strong>velocidade: </strong>{pokemonInfo.stats[5].base_stat}</p>
        <p><strong>habilidade: </strong>{pokemonInfo.abilities[0].ability.name}</p>
      </div>
    </div>
  );
};
