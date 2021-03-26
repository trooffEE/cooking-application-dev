import React, { useRef } from "react";

const DescriptionNewRecipe = ({ value, onChange }) => {
  const input = useRef();
  return (
    <div className="innerContent">
      <h3>Description of your recipe!</h3>
      <p>*Just an advice - try yo stick with step by step instruction!</p>
      <textarea
        name="new-recipe-description"
        id=""
        value={value}
        onChange={() => onChange(input.current.value)}
        ref={input}
      ></textarea>
    </div>
  );
};

export default DescriptionNewRecipe;
