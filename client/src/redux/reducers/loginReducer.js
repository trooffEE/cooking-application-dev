import REDUCER_TYPES from "../actionTypes/loginActionTypes";
import isEmpty from "is-empty";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "../actionCreators/loginActionCreator";

const {
  SET_PASSWORD_VALUE,
  SET_LOGIN_VALUE,
  SET_IS_VALIDATION_STATUS,
  SET_IS_VALID_LOGIN,
  SET_IS_VALID_PASSWORD,
  SET_CURRENT_USER,
} = REDUCER_TYPES;

const initState = {
  userID: null,
  isLoggedIn: false,
  isPassValidation: false,
  isPassLogin: false,
  isPassPassword: false,
  login: "",
  _password: "",
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {
    case SET_LOGIN_VALUE:
      return { ...state, login: action.login };

    case SET_PASSWORD_VALUE:
      return { ...state, _password: action.password };

    case SET_IS_VALIDATION_STATUS:
      return { ...state, isPassValidation: action.isPassValidation };

    case SET_IS_VALID_LOGIN:
      return { ...state, isPassLogin: action.isPassLogin };

    case SET_IS_VALID_PASSWORD:
      return { ...state, isPassPassword: action.isPassPassword };

    case SET_CURRENT_USER:
      return {
        ...state,
        isLoggedIn: !isEmpty(action.payload),
        userID: action.payload.id,
      };

    default:
      return state;
  }
}

// Register User
export const registerUser = (userData, history) => {
  axios
    .post("/api/users/register", userData)
    .then((res) => {
      console.log("bruh");
      history.push("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};

// Login - get user token
export const loginUser = (userData, history) => {
  return (dispatch) => {
    axios
      .post("/api/users/login", userData)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
        console.log(decoded);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
