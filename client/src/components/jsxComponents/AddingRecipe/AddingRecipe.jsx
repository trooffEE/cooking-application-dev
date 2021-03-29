import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentNewRecipeDescription,
  setCurrentNewRecipeTitle,
} from "../../../redux/actionCreators/recipesExternalActionCreators";
import { StyledButton } from "../../styledComponents/FormRelatedComponents/FormRelatedComponents";
import { StyledAddingNewRecipe } from "../../styledComponents/Recipes/AddingRecipes/StyledAddingRecipe";
import DescriptionNewRecipe from "./DescriptionNewRecipe/DescriptionNewRecipe";
import TitleNewRecipe from "./TitleNewRecipe/TitleNewRecipe";

const AddingRecipe = () => {
  const currentTitle = useSelector(
    (state) => state.recipeReducer.newRecipe.title
  );
  const currentDescription = useSelector(
    (state) => state.recipeReducer.newRecipe.description
  );
  const dispatch = useDispatch();

  const onChange = (onChangeCallback) => (value) => {
    dispatch(onChangeCallback(value));
  };

  return (
    <StyledAddingNewRecipe>
      <TitleNewRecipe
        title="Title for new Recipe!"
        value={currentTitle}
        onChange={onChange(setCurrentNewRecipeTitle)}
      />
      <DescriptionNewRecipe
        value={currentDescription}
        onChange={onChange(setCurrentNewRecipeDescription)}
      />
      <StyledButton padding={[10, 20]}>Add new Recipe!</StyledButton>
    </StyledAddingNewRecipe>
  );
};

export default AddingRecipe;
