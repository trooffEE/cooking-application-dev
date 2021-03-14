import REDUCER_TYPES from "../actionTypes/recipesExternalActionTypes";

const { SET_CURRENT_SEARCH_VALUE } = REDUCER_TYPES;

const initState = {
  searchValue: "",
};

export default function recipeReducer(state = initState, action) {
  switch (action.type) {
    case SET_CURRENT_SEARCH_VALUE:
      return { ...state, searchValue: action.value };
    default:
      return state;
  }
}
