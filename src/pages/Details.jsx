import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

import ThemeContext from '../context/ThemeContext';

import { Title } from '../styles/styles';
import Grid from '@mui/material/Grid';

import NavBar from '../components/NavBar';
import Loading from './Loading';
import DetailsCard from '../components/DetailsCard';

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
    document.title = `Pokemon Status`
  }, [pokemonId]);

  return (
    <div >
      {isLoading ? <Loading /> : (
        <div style={{ backgroundColor: definedTheme.background, height: '100%' }}>
          <NavBar />
          <div>
          <Title fontColor={ definedTheme.typography }>Pokémon Status</Title>
            <Grid container style={{ paddingBottom: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Grid item >
                <img
                  src={`https://cdn.traction.one/pokedex/pokemon/${pokemonId}.png`}
                  alt={`pokemon ${pokemonId}`}
                  style={{ height: '300px' }}
                />
              </Grid>
              <Grid item >
                <DetailsCard  pokemonInfo={pokemonInfo} />
              </Grid>
            </Grid>
          </div>
        </div>
      )}
    </div>
  );
};
