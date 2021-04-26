import React from "react";
import { Row } from "../../../styledComponents/HandyComponents/HandyComponents";
import {
    StyledYourRecipeDescription,
  StyledYourRecipeImage,
  StyledYourRecipeItem,
} from "../../../styledComponents/Recipes/YourRecipes/YourRecipesStyled";
import bcg from "../../../../assets/food-background.jpg";
import YourRecipeButtons from "./YourRecipeButtons/YourRecipeButtons";

const YourRecipeItem = ({ title, imageUrl, desc, id }) => {
  return (
    <Row>
      <StyledYourRecipeItem>
        <StyledYourRecipeImage image={imageUrl}></StyledYourRecipeImage>
        <StyledYourRecipeDescription>
          <h2>{title}</h2>
          <p>
            {desc}
          </p>
          <YourRecipeButtons id={id}/>
        </StyledYourRecipeDescription>
      </StyledYourRecipeItem>
    </Row>
  );
};

export default YourRecipeItem;
