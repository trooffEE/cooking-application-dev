import React from "react";
import axios from "axios";
import { StyledButton } from "../../../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { StyledYourRecipeButtons } from "../../../../styledComponents/Recipes/YourRecipes/YourRecipesStyled";

const YourRecipeButtons = ({ id }) => {
  const removeFromDB = () => {
    axios
      .delete("/your-recipes", { data: { id } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <StyledYourRecipeButtons>
      <StyledButton submit={false} padding={[5, 10]} onClick={removeFromDB}>
        Remove
      </StyledButton>
    </StyledYourRecipeButtons>
  );
};

export default YourRecipeButtons;
