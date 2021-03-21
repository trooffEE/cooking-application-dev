import React from "react";
import { Grid } from "../../../styledComponents/HandyComponents/HandyComponents";
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipesResult = ({ isLoading, recipes }) => {
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  
  const RecipeItems = recipes.map(item => <RecipeItem key={item.id} id={item.id} image={item.image} title={item.title}/>);

  return (
    <Grid>
      {RecipeItems}
    </Grid>
  );
};

export default RecipesResult;
