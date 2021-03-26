import REDUCER_TYPES from "../actionTypes/loginActionTypes";

const {
  SET_PASSWORD_VALUE,
  SET_LOGIN_VALUE,
  SET_IS_VALIDATION_STATUS,
  SET_IS_VALID_LOGIN,
  SET_IS_VALID_PASSWORD,
} = REDUCER_TYPES;

const initState = {
  isLoggedIn: true,
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

    default:
      return state;
  }
}
