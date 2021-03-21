import React from "react";
import {
  ColumnItem,
  Columns,
} from "../../../styledComponents/HandyComponents/HandyComponents";
import { NavigationStyles } from "../../../styledComponents/Header/HeaderStyles";
import { Link } from "react-router-dom";
import NavigationLoggedIn from "./NavigationLoggedIn/NavigationLoggedIn";
import NavigationNotLoggedIn from "./NavigationNotLoggedIn/NavigationNotLoggedIn";

const Navigation = ({ isLoggedIn }) => {
  return (
    <Columns amount={2} gap={30}>
      <ColumnItem>
        <NavigationStyles>
          {isLoggedIn ? <NavigationLoggedIn /> : <NavigationNotLoggedIn />}
        </NavigationStyles>
      </ColumnItem>
      <NavigationStyles>
        <Link to="/login" className="login-link">
          <span>Login</span>
        </Link>
      </NavigationStyles>
    </Columns>
  );
};

export default Navigation;
