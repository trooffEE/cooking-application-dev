import {combineReducers} from 'redux';
import recipeReducer from './recipesExternalReducer.js';
import loginReducer from './loginReducer.js';

const combinedReducers = combineReducers({
    recipeReducer,
    loginReducer
});

export default combinedReducers;
