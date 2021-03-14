import REDUCER_TYPES from '../actionTypes/recipesExternalActionTypes'

const {SET_CURRENT_SEARCH_VALUE} = REDUCER_TYPES;

export const setSearchInputValue = (value) => ({
  type: SET_CURRENT_SEARCH_VALUE,
  value,
});
