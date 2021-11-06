import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.css';
import pikachu from '../assets/home-bg.png';
import { StyledButton } from '../styles/styles';
export default function Home() {
  return (
    <div className='conteudo'>
      <NavBar />
      <div className='pai' >
        <div className='filho'>
          <div> <p className="title"><strong>Encontre</strong> Todos<br></br>
            os seus pokémons<br></br> favoritos</p>
          </div>
          <div className="content2">
            <p className="title2">
              Você pode aprender sobre o tipo<br></br>
              de pokémon, suas forças,<br></br>
              fraquezas e habilidades</p>
          </div>
          < StyledButton className="botao">Veja os pokemóns</StyledButton>
        </div>

        <img className="pikachu" src={pikachu} alt="pikachu" />
      </div>
    </div>

  );
};
