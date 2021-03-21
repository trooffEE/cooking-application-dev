import React, { useState } from "react";
import {
  RecipeItemButton,
  RecipeItemCaption,
  RecipeItemStyled,
} from "../../../../styledComponents/Recipes/RecipeItemStyled/RecipeItemStyled";

const RecipeItem = ({ title, image }) => {
  let [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonHoveredStyles = hovered ? "visible" : "anim";

  return (
    <RecipeItemStyled
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RecipeItemCaption>{title}</RecipeItemCaption>
      <img src={image} alt=""/>
      <RecipeItemButton className={`${buttonHoveredStyles}`}>
        Subscribe
      </RecipeItemButton>
    </RecipeItemStyled>
  );
};

export default RecipeItem;
