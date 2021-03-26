import React from 'react';
import { StyledButton } from '../../../../styledComponents/FormRelatedComponents/FormRelatedComponents';
import { StyledYourRecipeButtons } from '../../../../styledComponents/Recipes/YourRecipes/YourRecipesStyled';

const YourRecipeButtons = () => {
    return (
        <StyledYourRecipeButtons>
            <StyledButton submit={false} padding={[5, 10]}>Remove</StyledButton>
        </StyledYourRecipeButtons>
    );
}

export default YourRecipeButtons;
