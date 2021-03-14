import React from "react";
import { RecipesStyles } from "../../styledComponents/Recipes/ExternalRecipes/ExternalRecipes";
import RecipesResult from "./RecipesResult/RecipesResult";
import RecipesSearchBlock from "./RecipesSearchBlock/RecipesSearchBlock";
import RecipesBriefInfo from "./RecipesBriefInfo/RecipesBriefInfo";

const Recipes = (props) => {
  return (
    <RecipesStyles>
      <RecipesBriefInfo />
      <RecipesSearchBlock />
      <RecipesResult resultLink={"/recipes/complexSearch?query=pasta&maxFat=25&number=2"}/>
    </RecipesStyles>
  );
};

export default Recipes;
