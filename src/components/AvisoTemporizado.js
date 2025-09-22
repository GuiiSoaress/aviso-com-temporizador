import React, { useState, useEffect } from 'react';

function AvisoTemporizado() {
  const [visivel, setVisivel] = useState(true);
  
  useEffect(() => {
    console.log("Componente montado.");

    const timer = setTimeout(() => {
      console.log("Escondendo a mensagem.");
      setVisivel(false); 
    }, 3000);

    return () => {
      console.log("Limpando o temporizador.");
      clearTimeout(timer); 
    };
  }, []); 

  function mensagem(){
    if(visivel){
        return <div>
            <h1>Bem vindo!</h1>
            <p>Esta mensagem desaparecerá em 3 segundos...</p>
        </div>
    }else{
        return null
    }
  }

  return (
    <div>
        {mensagem()}
    </div>
  );
}

export default AvisoTemporizado;