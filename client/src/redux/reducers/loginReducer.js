import REDUCER_TYPES from "../actionTypes/loginActionTypes";

const initState = {
  isLoggedIn: true,
};

export default function loginReducer(state = initState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
