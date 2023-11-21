import React, { useState } from "react";

export default function ColorForm(props) {
  let [input, setInput] = useState("");

  const handleSubmit = (e) => {
    //we still want to elimate the default behavior of our form submittal
    e.preventDefault();
    // addColor, the function we just built ,should be available within props
    props.addColor(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}
