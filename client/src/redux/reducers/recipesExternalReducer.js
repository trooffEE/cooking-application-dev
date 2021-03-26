import REDUCER_TYPES from "../actionTypes/recipesExternalActionTypes";

const {
  SET_CURRENT_SEARCH_VALUE,
  SET_CURRENT_PAGE,
  SET_LOADING_STATUS,
  SET_CURRENT_VIEWABLE_RECIPES,
  SET_TITLE_NEW_RECIPE,
  SET_DESCRIPTION_NEW_RECIPE,
} = REDUCER_TYPES;

const initState = {
  searchValue: "",
  currentPageExternalRecipes: 1,
  currentViewableRecipes: [],
  maxRecipes: 300,
  recipesOnPageLimit: 12,
  isLoading: true,
  isDevMode: false,
  newRecipe: {
    title: "!",
    description: "!!",
  },
};

export default function recipeReducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_SEARCH_VALUE:
      return { ...state, searchValue: action.value };

    case SET_CURRENT_PAGE:
      return { ...state, currentPageExternalRecipes: action.page };

    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.status };

    case SET_CURRENT_VIEWABLE_RECIPES:
      return { ...state, recipes: action.recipes };

    case SET_TITLE_NEW_RECIPE:
      return {
        ...state,
        newRecipe: { ...state.newRecipe, title: action.title },
      };

    case SET_DESCRIPTION_NEW_RECIPE:
      return {
        ...state,
        newRecipe: { ...state.newRecipe, description: action.description },
      };

    default:
      return state;
  }
}
