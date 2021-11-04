import React, { useState } from 'react';
import axios from 'axios';

export default function Category() {
  const [categorias, setCategorias] = useState([]);
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
  return (
    <div>
      
    </div>
  );
};
