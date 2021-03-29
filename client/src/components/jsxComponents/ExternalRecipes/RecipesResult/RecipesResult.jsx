import React, { useState } from "react";
import { Grid } from "../../../styledComponents/HandyComponents/HandyComponents";
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipesResult = ({ isLoading, recipes, searchValue }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  const RecipeItems = recipes.map((item) => (
    <RecipeItem
      key={item.id}
      id={item.id}
      image={item.image}
      title={item.title}
    />
  ));

  return (
    <Grid>
      {RecipeItems.length > 0 ? (
        RecipeItems
      ) : (
        <p className="fallback-message">
          On your request "<span className="fallback-query">{searchValue}</span>
          " nothing was found...
        </p>
      )}
    </Grid>
  );
};

export default RecipesResult;
