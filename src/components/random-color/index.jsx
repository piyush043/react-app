import { useEffect, useState } from "react";
import "./style.css";

const RandomColor = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  useEffect(()=> {
    if (colorType === 'rgb') {
        generateRgbColor()
    } else {
        generateHexColor()
    }
  }, [colorType]);

  const handleOptionChange = (e) => {
    setColorType(e.target.value);
    // setColor('#FFFFF')
  };

  function handleGenerateRandomColor() {
    if (colorType === "hex") {
      generateHexColor();
    } else {
      generateRgbColor();
    }
  }

  function randomNumberGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function generateHexColor() {
    const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += colors[randomNumberGenerator(colors.length)];
    }

    setColor(hexColor);
  }

  function generateRgbColor() {
    const r = randomNumberGenerator(256);
    const g = randomNumberGenerator(256);
    const b = randomNumberGenerator(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div className="container"
      style={{background: color}}>
      <label className="radio-label" >
        <input
          type="radio"
          name="color"
          value="hex"
          checked={colorType === "hex"}
          onChange={handleOptionChange}
        />
        HEX
      </label>
      <label className="radio-label"
      >
        <input
          type="radio"
          name="color"
          value="rgb"
          checked={colorType === "rgb"}
          onChange={handleOptionChange}
        />
        RGB
      </label>
      <button onClick={() => handleGenerateRandomColor()}>
        Generate Random Color
      </button>
      <div className="content">
        <h3>{colorType}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
