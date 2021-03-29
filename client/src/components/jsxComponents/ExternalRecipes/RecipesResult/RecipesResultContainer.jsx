import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setViewableRecipesAsync } from "../../../../redux/actionCreators/recipesExternalActionCreators";
import RecipesResult from "./RecipesResult";

const RecipesResultContainer = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const isLoading = useSelector((state) => state.recipeReducer.isLoading);
  const searchValue = useSelector((state) => state.recipeReducer.searchValue);
  const currentPage = useSelector(
    (state) => state.recipeReducer.currentPageExternalRecipes
  );
  const recipesOnPageLimit = useSelector(
    (state) => state.recipeReducer.recipesOnPageLimit
  );

  let [searchRes, setSearchRes] = useState("");

  let offset = currentPage * recipesOnPageLimit - recipesOnPageLimit;
  let link = `/recipes/complexSearch?&number=${recipesOnPageLimit}&offset=${offset}&titleMatch=${searchValue}`;

  useEffect(() => {
    dispatch(setViewableRecipesAsync(link));
  }, [recipesOnPageLimit, offset, dispatch]);

  useEffect(() => {
    setSearchRes(searchValue);
  }, [recipes]);

  return (
    <RecipesResult
      isLoading={isLoading}
      recipes={recipes}
      searchValue={searchRes}
    />
  );
};

export default RecipesResultContainer;
