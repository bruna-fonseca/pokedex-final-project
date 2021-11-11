import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import pikachu from '../assets/home-bg.png';

import ThemeContext from '../context/ThemeContext';

export default function Home() {
  const { definedTheme } = useContext(ThemeContext);

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

        < button className="btn">Veja os pokémons</button>

        <div className="imagem">
          <img className="pikachu" src={pikachu} alt="pikachu" />
        </div>
      </div>
    </div>

  );
};
