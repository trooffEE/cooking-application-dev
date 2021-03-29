import REDUCER_TYPES from "../actionTypes/recipesExternalActionTypes";
import { batch } from "react-redux";

import testAPI from "../../api/testApi";
import API from "../../api/api";

const {
  SET_CURRENT_SEARCH_VALUE,
  SET_CURRENT_PAGE,
  SET_LOADING_STATUS,
  SET_CURRENT_VIEWABLE_RECIPES,
  SET_TITLE_NEW_RECIPE,
  SET_DESCRIPTION_NEW_RECIPE,
  SET_MAXIMUM_RECIPES
} = REDUCER_TYPES;

export const setSearchInputValue = (value) => ({
  type: SET_CURRENT_SEARCH_VALUE,
  value,
});

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});

export const setLoadingStatus = (status) => ({
  type: SET_LOADING_STATUS,
  status,
});

export const setViewableRecipes = (recipes) => ({
  type: SET_CURRENT_VIEWABLE_RECIPES,
  recipes,
});

export const setCurrentNewRecipeTitle = (title) => ({
  type: SET_TITLE_NEW_RECIPE,
  title,
});

export const setCurrentNewRecipeDescription = (description) => ({
  type: SET_DESCRIPTION_NEW_RECIPE,
  description,
});

export const setMaxRecipes = (maxRecipes) => ({
  type: SET_MAXIMUM_RECIPES,
  maxRecipes,
});

export const setViewableRecipesAsync = (link) => {
  return (dispatch, getState) => {
    const devMode = getState().recipeReducer.isDevMode;
    const api = devMode ? new testAPI() : new API();

    dispatch(setLoadingStatus(true));
    api
      .getData(link)
      .then((res) => {
        batch(() => {
          dispatch(setMaxRecipes(res.data.totalResults));
          dispatch(setViewableRecipes(res.data.results));
          dispatch(setLoadingStatus(false));
        });
      })
      .catch((err) => console.log(err.message));
  };
};


