import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  RecipeItemButton,
  RecipeItemCaption,
  RecipeItemStyled,
} from "../../../../styledComponents/Recipes/RecipeItemStyled/RecipeItemStyled";

const RecipeItem = ({ title, image }) => {
  let [hovered, setHovered] = useState(false);

  const userID = useSelector((state) => state.loginReducer.userID);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const addItemToDB = () => {
    axios.post("/your-recipes/add", {
      title,
      description:
        "THIS ITEM WAS ADDED FROM EXTERNAL-API THAT DOESN'T HAVE MEANINGFUL DESCRIPTION SO YOU ONLY SEE THIS FALLBACK-TEXT",
      image,
      idOwner: userID,
    });
  };

  const buttonHoveredStyles = hovered ? "visible" : "anim";

  return (
    <RecipeItemStyled
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <RecipeItemCaption>{title}</RecipeItemCaption>
      <img src={image} alt="" />
      <RecipeItemButton
        className={`${buttonHoveredStyles}`}
        onClick={addItemToDB}
      >
        Subscribe
      </RecipeItemButton>
    </RecipeItemStyled>
  );
};

export default RecipeItem;
