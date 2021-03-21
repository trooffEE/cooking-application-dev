import REDUCER_TYPES from "../actionTypes/recipesExternalActionTypes";
import { batch } from "react-redux";

import testAPI from "../../api/testApi";
import API from "../../api/api";

const {
  SET_CURRENT_SEARCH_VALUE,
  SET_CURRENT_PAGE,
  SET_LOADING_STATUS,
  SET_CURRENT_VIEWABLE_RECIPES,
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

export const setViewableRecipesAsync = (link) => {
  return (dispatch, getState) => {
    const devMode = getState().recipeReducer.isDevMode;
    const api = devMode ? new testAPI() : new API();

    dispatch(setLoadingStatus(true));
    api
      .getData(link)
      .then((res) => {
        batch(() => {
          dispatch(setViewableRecipes(res.data.results));
          dispatch(setLoadingStatus(false));
        });
      })
      .catch((err) => console.log(err.message));
  };
};
