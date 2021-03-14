import React, { useCallback, useEffect, useState } from "react";
import { Grid } from "../../../styledComponents/HandyComponents/HandyComponents";
import useRequest from "../../API hook/useRequest";
import RecipeItem from "./RecipeItem/RecipeItem";

const RecipesResult = ({resultLink}) => {
  const [recipes, setRecipes] = useState([]);
  const data = useCallback(useRequest(resultLink), [resultLink]);

  // console.log(data);
  
  return <Grid>
    <RecipeItem />
  </Grid>;
};

export default RecipesResult;
