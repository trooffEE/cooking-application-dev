import express from 'express';
import {getRecipe, createRecipe} from '../controllers/recipe.js';

const recipeRoute = express.Router();

recipeRoute.get('/', getRecipe);
recipeRoute.post('/', createRecipe);

export default recipeRoute;