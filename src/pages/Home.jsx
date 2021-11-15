import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import pikachu from '../assets/home-bg.png';

import { Link } from 'react-router-dom';

import ThemeContext from '../context/ThemeContext';

export default function Home() {
  const { definedTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.title = 'Home - Pokédex';
  }, []);

  return (
    <div>
      <NavBar />
      
      <div className='container' style={{ backgroundColor: definedTheme.homeBg }}>
        <div style={{ color: definedTheme.homeTxt }} className='title'>
          <p><strong>Encontre</strong> todos<br />
            os seus pokémons favoritos.</p>
          <br />
          <div className="subtitle">
            <p>Você pode aprender sobre o tipo<br />
              de pokémon, suas forças,<br></br>
              fraquezas e habilidades.
            </p>
          </div>
        </div>

        <Link to="/geracoes">
          < button className="btn">Veja os pokémons</button>
        </Link>

        <div className="imagem">
          <img className="pikachu" src={pikachu} alt="pikachu" />
        </div>
      </div>
    </div>

  );
};
