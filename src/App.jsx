import { useState } from 'react';
import './App.css';
import Intervalo from './components/Intervalo/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercicio de React-Redux (Simples)</h1>
      <div className="linha">
      <Intervalo />
      </div>
      <div className="linha">
        <Soma ></Soma>
        <Sorteio ></Sorteio>
        <Media ></Media>
      </div>
    </div>
  );
}

export default App;
