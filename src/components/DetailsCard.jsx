import React from 'react'
 
import '../styles/DetailsCard.css';

export default function DetailsCard({ pokemonInfo }) {
  return (
    <div className="card-details">
      <div className="card-top">
        <h2>{pokemonInfo.species.name}</h2>
          {pokemonInfo.types.map(({ type }, index) => (
            <span className="types" key={index}>{type.name}</span>
            ))}
      </div>
      <div className="card-stats">
        <p><span>Ataque: </span>{pokemonInfo.stats[1].base_stat}</p>
        <p><span>Defesa: </span>{pokemonInfo.stats[2].base_stat}</p>
        <p><span>Velocidade: </span>{pokemonInfo.stats[5].base_stat}</p>
      </div>
    </div>
  );
};
