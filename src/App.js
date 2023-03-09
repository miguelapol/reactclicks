import './App.css';
import Boton from './components/Boton'
import Contador from './components/Contador'
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import { useState } from 'react';
function App() {
  const [numeroClicks,setNumeroClicks]=useState(0);

  const manejarClick=()=>{
    setNumeroClicks(numeroClicks+1);
  }
  const reiniciarContador=()=>{
    setNumeroClicks(0);
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numeroClicks={numeroClicks}
        />
        <Boton
        texto='click'
        esbotonClick={true}
        manejarClick={manejarClick} />

        <Boton
        texto='Reiniciar'
        esbotonClick={false}
        manejarClick={reiniciarContador} />
      </div>

    </div>
  );
}

export default App;
