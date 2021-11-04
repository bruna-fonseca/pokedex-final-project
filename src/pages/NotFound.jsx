import React from 'react';
import { Link } from 'react-router-dom';

import ImgNotFound from '../assets/not-found-img.png';
import { StyledButton, NotFoundTitle } from '../styles/styles';

const CONTAINER_STYLES = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
};

const IMG_STYLES = {
  height: 'auto',
  width: '100%',
  maxWidth: '700px',
  objectFit: 'cover',
  objectPosition: 'center',
};
export default function NotFound() {
  return (
    <>
      <div style={ CONTAINER_STYLES } >
          <NotFoundTitle>Página não encontrada</NotFoundTitle>
          <img
            src={ ImgNotFound }
            alt="Imagem da tela NotFound"
            style={ IMG_STYLES }
          />
          <Link style={{ textDecoration: 'none' }}  to="/"><StyledButton>Volte para a home</StyledButton></Link>
      </div>
    </>
  );
};
