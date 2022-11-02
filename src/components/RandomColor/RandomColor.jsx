import React, { useEffect, useRef, useState } from 'react';
import { getRandomColor } from '../../helpers/getRandomColor';

const RandomColor = () => {
  const [color, setColor] = useState('#bbb');

  const rectangle = useRef();

  const handleClick = () => {
    // const newColor = getRandomColor()
    // setColor(newColor)
    setColor(getRandomColor());
  };

  useEffect(() => {
    rectangle.current.style.backgroundColor = color;
    // rectangle.current === document.getElementById("id")
  }, [color]);

  return (
    <div ref={rectangle}>
      <h1>El color seleccionado es {color}</h1>
      <button onClick={handleClick}>Cambiar color</button>
    </div>
  );
};

export default RandomColor;
