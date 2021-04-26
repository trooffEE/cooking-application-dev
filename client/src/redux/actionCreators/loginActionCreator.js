import REDUCER_TYPES from "../actionTypes/loginActionTypes";
// import { batch } from "react-redux";

const {
  SET_PASSWORD_VALUE,
  SET_LOGIN_VALUE,
  SET_IS_VALIDATION_STATUS,
  SET_IS_VALID_LOGIN,
  SET_IS_VALID_PASSWORD,
  SET_CURRENT_USER,
} = REDUCER_TYPES;

export const setLoginValue = (login) => ({
  type: SET_LOGIN_VALUE,
  login,
});

export const setPasswordValue = (password) => ({
  type: SET_PASSWORD_VALUE,
  password,
});

export const setIsPassedValidation = (isPassed) => ({
  type: SET_IS_VALIDATION_STATUS,
  isPassed,
});

export const setIsLoginValid = (isPassLogin) => ({
  type: SET_IS_VALID_LOGIN,
  isPassLogin,
});

export const setIsPasswordValid = (isPassPassword) => ({
  type: SET_IS_VALID_PASSWORD,
  isPassPassword,
});

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
