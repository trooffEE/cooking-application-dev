import Recipe from "../models/recipeModel.js";

export const getRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const post = req.body;

  const newRecipe = new Recipe(post);

  try {
    await newRecipe.save();

    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteRecipe = async (req, res) => {
  console.log(req.body.id);
  Recipe.findByIdAndRemove(req.body.id, (err, tasks) => {
    if (err) return res.status(500).send(err);
    const response = {
      message: "Todo successfully deleted",
      id: req.params.id,
    };
    return res.status(200).send(response);
  });
};
