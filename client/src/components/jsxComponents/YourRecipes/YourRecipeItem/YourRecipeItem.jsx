import React from "react";
import { Row } from "../../../styledComponents/HandyComponents/HandyComponents";
import {
    StyledYourRecipeDescription,
  StyledYourRecipeImage,
  StyledYourRecipeItem,
} from "../../../styledComponents/Recipes/YourRecipes/YourRecipesStyled";
import bcg from "../../../../assets/food-background.jpg";
import YourRecipeButtons from "./YourRecipeButtons/YourRecipeButtons";

const YourRecipeItem = ({ title, imageUrl, desc }) => {
  return (
    <Row>
      <StyledYourRecipeItem>
        <StyledYourRecipeImage image={imageUrl}></StyledYourRecipeImage>
        <StyledYourRecipeDescription>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            temporibus eaque dignissimos aperiam amet beatae labore facilis?
            Repellat perferendis autem inventore earum recusandae cum iusto,
            facere pariatur, dignissimos ullam veritatis.
          </p>
          <YourRecipeButtons />
        </StyledYourRecipeDescription>
      </StyledYourRecipeItem>
    </Row>
  );
};

export default YourRecipeItem;
