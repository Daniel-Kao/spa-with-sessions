import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
