import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutFailed,
  logOutStart,
  logOutSuccess,
} from "./slice/authSlice";

//npm install axios

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:8080/user/login", user);
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
    await axios.post("http://localhost:8080/user/logout", userName, {
      // headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logOutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(logOutFailed());
  }
};