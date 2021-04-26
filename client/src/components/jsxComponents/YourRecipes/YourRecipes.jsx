import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CakeLayout } from "../../styledComponents/HandyComponents/HandyComponents";
import HeaderRecipes from "./HeaderRecipes/HeaderRecipes";
import YourRecipeItem from "./YourRecipeItem/YourRecipeItem";

const YourRecipes = () => {
  const [recipesInDB, setRecipesInDB] = useState([]);

  const userID = useSelector((state) => state.loginReducer.userID);

  useEffect(() => {
    let mounted = false;
    axios
      .get("/your-recipes")
      .then((res) => {
        if (!mounted) {
          let { data: recipes } = res;
          setRecipesInDB(recipes);
        }
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
        {recipesInDB.map((item) => {
          return userID === item.idOwner && (
            <YourRecipeItem
              title={item.title}
              desc={item.description}
              id={item._id}
              imageUrl={
                item.image ||
                "https://spoonacular.com/recipeImages/782622-312x231.png"
              }
            />
          );
        })}
      </CakeLayout>
    </>
  );
};

export default YourRecipes;
