import React, { useState } from "react";

function App() {
  const [bgcolor, setColor] = useState("White");
  const [heading, setHeading] = useState("Hello");
  function handleMouseClick() {
    setHeading("Submitted");
  }
  function handleOnMouseOver() {
    setColor("black");
  }
  function handleOnMouseOut() {
    setColor("White");
  }
  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOut={handleOnMouseOut}
        onMouseOver={handleOnMouseOver}
        onClick={handleMouseClick}
        style={{ backgroundColor: bgcolor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
