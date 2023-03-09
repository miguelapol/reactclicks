import React from 'react';
import '../css/Boton.css'
function Boton({texto,esbotonClick,manejarClick}) {
    return(
        <button className={esbotonClick ? 'boton-click':'boton-reiniciar'} 
        onClick={manejarClick}>
          {texto}
        </button>
    );
}

export default Boton;