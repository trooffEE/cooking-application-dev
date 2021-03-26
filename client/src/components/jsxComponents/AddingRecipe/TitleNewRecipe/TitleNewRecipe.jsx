import React, { useRef } from "react";

const TitleNewRecipe = ({name, type, value, onChange, title}) => {
  const input = useRef();

  return (
    <label>
      {title}
      <div>
        <input
          name={name}
          type={type}
          value={value}
          onChange={() => onChange(input.current.value)}
          ref={input}
        />
      </div>
    </label>
  );
};

export default TitleNewRecipe;
