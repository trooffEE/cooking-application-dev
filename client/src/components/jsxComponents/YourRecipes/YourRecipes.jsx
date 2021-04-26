import axios from "axios";
import React, { useEffect, useState } from "react";
import { CakeLayout } from "../../styledComponents/HandyComponents/HandyComponents";
import HeaderRecipes from "./HeaderRecipes/HeaderRecipes";
import YourRecipeItem from "./YourRecipeItem/YourRecipeItem";

const YourRecipes = () => {
  const [recipesInDB, setRecipesInDB] = useState([]);

  useEffect(() => {
    let mounted = false;
    axios
      .get("/your-recipes")
      .then((res) => {
        if (!mounted) {
          let { data: recipes } = res;

          setRecipesInDB(recipes);
        }
        // setRecipesInDB();
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      mounted = true;
    };
  }, []);

  return (
    <>
      <HeaderRecipes />
      <CakeLayout>
        {recipesInDB.map((item) => (
          <YourRecipeItem
            title={item.title}
            desc={item.description}
            imageUrl="https://spoonacular.com/recipeImages/782622-312x231.png"
          />
        ))}
      </CakeLayout>
    </>
  );
};

export default YourRecipes;
