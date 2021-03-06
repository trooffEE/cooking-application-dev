import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddingRecipe from "./AddingRecipe/AddingRecipe";
import Recipes from "./ExternalRecipes/Recipes";
import Hero from "./Hero/Hero";
import Login from "./LoginSection/Login";
import Registration from "./RegistrationSection/Registration";
import YourRecipesContainer from "./YourRecipes/YourRecipesContainer";

const Content = ({ isLoggedIn }) => {
  return (
    <>
      {isLoggedIn ? (
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Hero isLoggedIn={isLoggedIn} />}
          />
          <Route path="/recipes" component={Recipes} />
          <Route path="/your-recipes/add" component={AddingRecipe} />
          <Route path="/your-recipes" component={YourRecipesContainer} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
};

export default Content;
