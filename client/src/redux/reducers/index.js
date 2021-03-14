import {combineReducers} from 'redux';
import recipeReducer from './recipesExternalReducer.js';

const combinedReducers = combineReducers({
    recipeReducer
});

export default combinedReducers;
