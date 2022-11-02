import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [valorContador, setValorContador] = useState(0);
  // valor, funcion para cambiar valor = useState(valorInicial)

  const handleClick = (accion) => {
    switch (accion) {
      case 'sumar':
        setValorContador(valorContador + 1);
        break;
      case 'restar':
        setValorContador(valorContador - 1);
        break;
      case 'reset':
        setValorContador(0);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log(valorContador);
  }, [valorContador]);

  return (
    <>
      <h1>{valorContador}</h1>
      <button onClick={() => handleClick('sumar')}>+</button>
      <button onClick={() => handleClick('restar')}>-</button>
      <button onClick={() => handleClick('reset')}>Reset</button>
    </>
  );
};

export default Counter;
