import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import pikachu from '../assets/home-bg.png';

export default function Home() {
  return (
    <div className='conteudo'>
      <NavBar />
      
      <div className='container' >
        <div className='title'>
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
