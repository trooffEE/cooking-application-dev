import Recipe from '../models/recipeModel.js';

export const getRecipe = async (req, res) => {
    try {
        const recipes = await Recipe.find();

        res.status(200).json(recipes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createRecipe = async (req, res) => {
    const post = req.body;

    const newRecipe = new Recipe(post);

    try {
        await newRecipe.save();

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}