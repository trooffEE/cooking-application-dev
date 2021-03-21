import React from "react";
import { RecipesStyles } from "../../styledComponents/Recipes/ExternalRecipes/ExternalRecipes";
import RecipesSearchBlock from "./RecipesSearchBlock/RecipesSearchBlock";
import RecipesBriefInfo from "./RecipesBriefInfo/RecipesBriefInfo";
import PaginationContainer from "../Pagination/PagintaionContainer/PaginationContainer";
import RecipesResultContainer from "./RecipesResult/RecipesResultContainer";

const Recipes = (props) => {
  return (
    <RecipesStyles>
      <RecipesBriefInfo />
      <RecipesSearchBlock />
      <PaginationContainer />
      <RecipesResultContainer />
    </RecipesStyles>
  );
};

export default Recipes;
