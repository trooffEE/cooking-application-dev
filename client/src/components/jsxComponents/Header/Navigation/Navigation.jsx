import React from "react";
import {
  ColumnItem,
  Columns,
} from "../../../styledComponents/HandyComponents/HandyComponents";
import {
    NavigationStyles
} from '../../../styledComponents/Header/HeaderStyles'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Columns amount={2} gap={30}>
      <ColumnItem>
        <NavigationStyles>
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
        </NavigationStyles>
      </ColumnItem>
      <NavigationStyles >
        <Link to="/login" className="login-link">
          <span>Login</span>
        </Link>
      </NavigationStyles>
    </Columns>
  );
};

export default Navigation;
