import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Loading from './Loading';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

import ThemeContext from '../context/ThemeContext';

import Cards from '../components/Card';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

import generation_info from '../constants/generation_info';

import { Title, StyledButton } from '../styles/styles';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '100px',
  },
});

export default function Generation() {
  const classes = useStyles();
  const [generation, setGeneration] = useState([]);
  const [visible, setVisible] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  const { definedTheme } = useContext(ThemeContext);
  console.log(definedTheme);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    document.title = 'Gerações - Pokedex'
  }, []);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/generation/1/')
      .then((res) => setGeneration(res.data.pokemon_species))
      .catch(error => console.log(error));
  }, []);

  function showMore() {
    setVisible((prevValues) => prevValues + 6);
  };

  function firstGeneration() {
    axios.get('https://pokeapi.co/api/v2/generation/1/')
      .then((res) => setGeneration(res.data.pokemon_species))
      .catch(error => console.log(error));
    setVisible(9);
  };

  function secondGeneration() {
    axios.get('https://pokeapi.co/api/v2/generation/2/')
      .then((res) => setGeneration(res.data.pokemon_species))
      .catch(error => console.log(error));
    setVisible(9);
  };

  function thirdGeneration() {
    axios.get('https://pokeapi.co/api/v2/generation/3/')
      .then((res) => setGeneration(res.data.pokemon_species))
      .catch(error => console.log(error));
    setVisible(9);
  };

  function fourthGeneration() {
    axios.get('https://pokeapi.co/api/v2/generation/4/')
      .then((res) => setGeneration(res.data.pokemon_species))
      .catch(error => console.log(error));
    setVisible(6);
  };

  return (
    <div style={{ backgroundColor: definedTheme.background }}>
      {isLoading ? <Loading /> : (
      <div> 
        <NavBar />

        <Title fontColor={ definedTheme.typography } >Escolha sua geração favorita</Title>

        <Carousel info={ generation_info } events={ [firstGeneration, secondGeneration, thirdGeneration, fourthGeneration ] } />
        <Grid className={classes.gridContainer} container spacing={4}>
          {generation && generation.slice(0, visible).map((pokemon, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} >
              <Cards pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>

        <StyledButton
          style={{ margin: '0 auto', marginTop: '20px' }}
          onClick={ showMore }
        >
          Mostrar mais
        </StyledButton>

      </div>
      )}
    </div>
  );
};
