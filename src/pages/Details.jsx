import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import { Title } from '../styles/styles';

import NavBar from '../components/NavBar';
import Loading from './Loading';
import DetailsCard from '../components/DetailsCard';

import '../styles/DetailsCard.css';
{/*
const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
};
*/}

export default function Details() {
  const { pokemonId } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(pokemonInfo);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => setPokemonInfo(res.data))
      .catch((error) => console.log(error));
    setTimeout(() => 
    setIsLoading(false),
    2000);
  }, [pokemonId]);

  return (
    <div>
      {isLoading ? <Loading /> : (
        <div>
          <NavBar />
          <Title>Pokemon Status</Title>
          <div className='detalheGeral'>
           <div className='detailsPage'>
            <img
              src={`https://cdn.traction.one/pokedex/pokemon/${pokemonId}.png`}
              alt={`pokemon ${pokemonId}`}
              style={{ height: '300px' }}
              className="imagemPokemon"
            />
            <div className='cardPokemon'>
              <DetailsCard pokemonInfo={pokemonInfo} />
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};
