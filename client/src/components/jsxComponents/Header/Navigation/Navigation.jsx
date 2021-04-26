import React from "react";
import {
  ColumnItem,
  Columns,
} from "../../../styledComponents/HandyComponents/HandyComponents";
import { NavigationStyles } from "../../../styledComponents/Header/HeaderStyles";
import { Link } from "react-router-dom";
import NavigationLoggedIn from "./NavigationLoggedIn/NavigationLoggedIn";
import NavigationNotLoggedIn from "./NavigationNotLoggedIn/NavigationNotLoggedIn";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../redux/reducers/loginReducer";

const Navigation = ({ isLoggedIn }) => {

  const dispatch = useDispatch();

  return (
    <Columns amount={2} gap={30}>
      <ColumnItem>
        <NavigationStyles>
          {isLoggedIn ? <NavigationLoggedIn /> : <NavigationNotLoggedIn />}
        </NavigationStyles>
      </ColumnItem>
      <NavigationStyles>
        {!isLoggedIn ? <Link to="/login" className="login-link">
          <span>Login</span>
        </Link> : <Link to="/" onClick={() => dispatch(logoutUser())}><span>Logout</span></Link> }
      </NavigationStyles>
    </Columns>
  );
};

export default Navigation;
