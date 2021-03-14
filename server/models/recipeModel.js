import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    ingredients: [String],
    instructions: String,
    dishType: [String],
    /*"dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],*/
    
    healthScore: Number,
    timeToCook: Number,
});

const Recipe = mongoose.model('RecipeModel', recipeSchema);

export default Recipe;