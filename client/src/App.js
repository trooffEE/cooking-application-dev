import { ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddingRecipe from "./components/jsxComponents/AddingRecipe/AddingRecipe";
import Recipes from "./components/jsxComponents/ExternalRecipes/Recipes";
import Wrapper from "./components/jsxComponents/HandyComponents/Wrapper/Wrapper";
import Header from "./components/jsxComponents/Header/Header";
import Hero from "./components/jsxComponents/Hero/Hero";
import Login from "./components/jsxComponents/LoginSection/Login";
import YourRecipes from "./components/jsxComponents/YourRecipes/YourRecipes";
import { AppStyle } from "./components/styledComponents/HandyComponents/HandyComponents";
import colors from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={colors}>
      <AppStyle>
        <Header />
        <main>
          <Wrapper>
            <Switch>
              <Route path="/" exact>
                <Hero />
              </Route>
              <Route path="/recipes">
                <Recipes />
              </Route>
              <Route path="/your-recipes/add">
                <AddingRecipe />
              </Route>
              <Route path="/your-recipes">
                <YourRecipes />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Redirect to="/" />
            </Switch>
          </Wrapper>
        </main>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
