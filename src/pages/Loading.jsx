import React, { useContext } from 'react';
import BarLoader from "react-spinners/BarLoader";

import ThemeContext from '../context/ThemeContext';

import LoadingImg from '../assets/loading-pokeballs.png';



export default function Loading() {
  const { definedTheme } = useContext(ThemeContext);
  
  const CONTAINER_STYLES = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: definedTheme.background,
  };
  const IMG_STYLES = {
    height: 'auto',
    width: '100%',
    maxWidth: '400px',
    objectFit: 'cover',
    objectPosition: 'center',
  };
  
  const HEADING_STYLES = {
    color: '#F2243A',
    fontSize: '50px',
    marginBottom: '5px',
  };
  
  const LOADING_STYLES = {
    height: '20px',
  };


  return (
    <div style={ CONTAINER_STYLES } >
      <img style={ IMG_STYLES } src={ LoadingImg } alt="pokebolas"/>
      <h1 style={ HEADING_STYLES } >Carregando</h1>
      <BarLoader style={ LOADING_STYLES } color={'#F2243A'} size={150} />
    </div>
  );
};
