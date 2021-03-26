import React from 'react';
import { StyledYourRecipeHeader } from '../../../styledComponents/Recipes/YourRecipes/YourRecipesStyled';

const HeaderRecipes = (props) => {
    return (
      <StyledYourRecipeHeader>
        <div className="innerContent">
          <h2>Your recipes! :)</h2>
          <p>&#9759;</p>
        </div>
      </StyledYourRecipeHeader>
    );
}

export default HeaderRecipes;
