import axios from "axios";
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

const AddingRecipe = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // the only validation :P
    if (currentTitle === "" || currentDescription === "") {
      return;
    }

    axios
      .post("/your-recipes/add", {
        title: currentTitle,
        description: currentDescription,
      })
      .then((res) => {
        props.history.push("/your-recipes");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledAddingNewRecipe onSubmit={handleSubmit}>
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
