import React from "react";
import { CakeLayout } from "../../styledComponents/HandyComponents/HandyComponents";
import HeaderRecipes from "./HeaderRecipes/HeaderRecipes";
import YourRecipeItem from "./YourRecipeItem/YourRecipeItem";

const YourRecipes = () => {
  return (
    <>
      <HeaderRecipes />
      <CakeLayout>
        <YourRecipeItem
          title={1231321}
          imageUrl="https://spoonacular.com/recipeImages/782622-312x231.png"
          title="Chocolate Peanut Butter Cinnamon Smoothie"
        />
        <YourRecipeItem
          title={1231321}
          imageUrl="https://spoonacular.com/recipeImages/664547-312x231.jpg"
          title="Vegetable Dip"
        />
        <YourRecipeItem
          title={1231321}
          imageUrl="https://spoonacular.com/recipeImages/661340-312x231.jpg"
          title="Spinach Salad with Strawberry Vinaigrette"
        />
        <YourRecipeItem
          title={1231321}
          imageUrl="https://spoonacular.com/recipeImages/715385-312x231.jpg"
          title="Slow Cooker Baked Potato Soup"
        />
        <YourRecipeItem
          title={1231321}
          imageUrl="https://spoonacular.com/recipeImages/716406-312x231.jpg"
          title="Asparagus and Pea Soup: Real Convenience Food"
        />
        <YourRecipeItem
          title={1231321}
          imageUrl="https://spoonacular.com/recipeImages/658579-312x231.jpg"
          title="Roasted Endive Salad With Prosciutto, Figs and Pistachios"
        />
      </CakeLayout>
    </>
  );
};

export default YourRecipes;
