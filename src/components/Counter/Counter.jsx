import React, { useState } from 'react';

const Counter = () => {
  //   let valorContador = 0;
  const [valorContador, setValorContador] = useState(0);

  const handleClick = () => {
    console.log('hiciste click');
    setValorContador(valorContador + 1);
    console.log(valorContador);
  };

  return (
    <>
      <h1>{valorContador}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Counter;
