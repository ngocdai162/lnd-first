import axios from "axios";
import { API_LOGIN, API_LOGOUT, API_REGISTER } from "../constants/api";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./slice/authSlice";

//npm install axios
// loginUser(newUser, dispatch, navigate); format code

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(API_LOGIN, user);
    dispatch(loginSuccess(res.data));
    console.log(res.data);
    console.log("Login Okkkkkkkkkkkkkkkkkkk")
    // navigate("/home/listCryptos");
  } catch (err) {
    console.log("Login faillllll")
    dispatch(loginFailed());
  }
};
export const logOut = async (dispatch, userName, navigate) => {
  dispatch(logOutStart());
  try {
    await axios.post(API_LOGOUT, userName, {
      // headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(logOutFailed());
  }
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(API_REGISTER, user);
    dispatch(registerSuccess());
    navigate("/");
  } catch (err) {
    dispatch(registerFailed());
  }
};
