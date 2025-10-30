import { useState } from "react";

const ColorBox = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];
  const nextColor = colors[(currentColorIndex + 1) % colors.length];

  return (
    <div
      style={{
        backgroundColor: currentColor,
        width: '200px',
        height: '200px',
        border: '2px solid black',
        padding: '20px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleClick}>{nextColor}</button>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{currentColor}</p>
    </div>
  )
};

export default ColorBox;
