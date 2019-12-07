import React, { useState } from "react";

function App() {
  // Stateful heading text
  // state variable convention, function for setting the state in Hooks
  const [headingText, setHeadingText] = useState("Hello");

  // handle hover state
  // setting and using state
  const [isMouseOver, setMouseOver] = useState(false);

  function handleCLick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        // setting inline styling in component
        // conditional rendering using turnary operator
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        //  using event listeners
        onClick={handleCLick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
