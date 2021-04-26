import express from 'express';
import {getRecipe, createRecipe, deleteRecipe} from '../controllers/recipe.js';

const recipeRoute = express.Router();

recipeRoute.get('/', getRecipe);
recipeRoute.post('/add', createRecipe);
recipeRoute.delete("/", deleteRecipe)

export default recipeRoute;