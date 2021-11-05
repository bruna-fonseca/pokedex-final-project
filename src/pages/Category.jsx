import React, { useState, useEffect } from 'react';
import axios from 'axios';
import category from '../constants/category'; 
import Loading from './Loading';
import NavBar from '../components/NavBar';
import Carousel from '../components/Carousel';

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

export default function Category(){
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);
  const [visible, setVisible] = useState(9);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    document.title = 'Gerações - Pokedex'
  }, []);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/type/10/')
      .then((res) => setCategorias(res.data.pokemon))
      .catch(error => console.log(error));
  }, []);


  function catFire() {
    axios.get('https://pokeapi.co/api/v2/type/10/')
      .then(
        (response) => {
          setCategorias(response.data.pokemon)
        }
      )
      .catch((e) => {
        console.log(e)
      }

      );
  }

  function catWater() {
    axios.get('https://pokeapi.co/api/v2/type/11/')
      .then(
        (response) => {
          setCategorias(response.data.pokemon)
        }
      )
      .catch(
        (e) => {
          console.log(e)
        }
      );
  }
  function catGrass() {
    axios.get('https://pokeapi.co/api/v2/type/12/')
      .then(
        (response) => {
          setCategorias(response.data.pokemon)
        }
      )
      .catch((e) => {
        console.log(e)
      }
      );
  }

  function catRaio() {
    axios.get('https://pokeapi.co/api/v2/type/13/')
      .then(
        (response) => {
          setCategorias(response.data.pokemon)
        }
      )
      .catch(
        (e) => {
          console.log(e)
        }
      );
  }

  function showMore() {
    setVisible((prevValues) => prevValues + 6);
  };
  return (
    <div>
      

      {isLoading ? <Loading /> : (
      <div> 
        <NavBar />

        <Title>Escolha sua categoria favorita</Title>

        <Carousel info={ category } events={ [catFire, catWater, catGrass, catRaio ] } />
        <Grid className={classes.gridContainer} container spacing={4}>
          {categorias && categorias.slice(0, visible).map((pokemon, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} >
              <Cards pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>

        <StyledButton
          style={{ margin: '0 auto', marginTop: '20px', marginBottom: '20px'}}
          onClick={ showMore }
        >
          Mostrar mais
        </StyledButton>

      </div>
      )}








    </div>
  );
};

