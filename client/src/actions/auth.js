import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./types";
import axios from "axios";

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("/api/users/register", body, config);

    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/users/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);
  }
};

// Logout / Clear Profile
export const logout = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/users/logout", config);

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);
  }
};

// Login User
export const loginCheck = () => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/users/loginCheck", config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    console.log(errors);
  }
};
