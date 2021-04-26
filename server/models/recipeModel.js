import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    description: String,
    image: String,
    idOwner: String
});

const Recipe = mongoose.model('recipes', recipeSchema);

export default Recipe;