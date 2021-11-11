import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import ThemeContext from '../context/ThemeContext';

import { Title } from '../styles/styles';

import NavBar from '../components/NavBar';
import Loading from './Loading';
import DetailsCard from '../components/DetailsCard';


const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
};

export default function Details() {
  const { pokemonId } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { definedTheme } = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => setPokemonInfo(res.data))
      .catch((error) => console.log(error));
    setTimeout(() => 
    setIsLoading(false),
    2000);
  }, [pokemonId]);

  return (
    <div >
      {isLoading ? <Loading /> : (
        <div style={{ backgroundColor: definedTheme.background, height: '100vh' }}>
          <NavBar />
          <div>
          <Title fontColor={ definedTheme.typography }>Pokemon Stats</Title>
            <div style={ CONTAINER_STYLES }>
              <img
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemonId}.png`}
                alt={`pokemon ${pokemonId}`}
                style={{ height: '300px' }}
              />
              <div>
                <DetailsCard pokemonInfo={pokemonInfo} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
