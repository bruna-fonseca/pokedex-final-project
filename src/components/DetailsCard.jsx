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
        <p><span >id: </span>{pokemonInfo.id}</p>
        <p><span >hp: </span>{pokemonInfo.stats[0].base_stat}</p>
        <p><span >atack: </span>{pokemonInfo.stats[1].base_stat}</p>
        <p><span >defence: </span>{pokemonInfo.stats[2].base_stat}</p>
        <p><span >s-atack: </span>{pokemonInfo.stats[3].base_stat}</p>
        <p><span >s-defense: </span>{pokemonInfo.stats[4].base_stat}</p>
        <p><span >speed: </span>{pokemonInfo.stats[5].base_stat}</p>
        <p><span >ability: </span>{pokemonInfo.abilities[0].ability.name}</p>
      </div>
    </div>
  );
};
