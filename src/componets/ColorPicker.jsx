import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ff0000");

  function handleChangeColor(event) {
    setColor(event.target.value);
  }

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          background: color,
          width: "300px",
          height: "100px",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "10px",
        }}>
        <p>{color}</p>
      </div>
      <input type="color" value={color} onChange={handleChangeColor} />
    </div>
  );
}

export default ColorPicker;
