import React from "react";
import { Link } from "react-router-dom";

const NavigationLoggedIn = () => {
  return (
    <>
      <Link to="/">
        <span>About</span>
      </Link>
      <Link to="/recipes">
        <span>API recipes</span>
      </Link>
      <Link to="/your-recipes">
        <span>Your recipes</span>
      </Link>
      <Link to="/your-recipes/add">
        <span>Add your recipe</span>
      </Link>
    </>
  );
};

export default NavigationLoggedIn;
