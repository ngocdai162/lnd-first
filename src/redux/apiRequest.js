import axios from "axios";
import { useSelector } from "react-redux";
import { API_LISTCRYPTO, LNDCoin, SingleCoin } from "../config/api";
import { API_DISABLE_FEE, API_GET_FEE, API_GET_WALLET, API_LOGIN, API_LOGOUT, API_REGISTER, API_UPDATE, API_UPDATE_FEE } from "../constants/api";
import { currentUserSelector } from "./selectors";
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
import { getFeeSuccess } from "./slice/feeSlice";
import { getLndApi } from "./slice/lndApiSlice";
import {getCoinApi} from "./slice/coinSlice";
import { getCoins } from "./slice/walletSlice";

//LOGIN
export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(API_LOGIN, user);
    dispatch(loginSuccess(res.data));
    // navigate("/home/listCryptos");
  } catch (err) {
    console.log("Login faillllll")
    dispatch(loginFailed());
  }
};

//LOGOUT
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

//REGISTER
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(API_REGISTER, user);
    // dispatch(registerSuccess());
    navigate("/");
  } catch (err) {
    dispatch(registerFailed());
  }
};

//UPDATE USER
export const updateUser= async(id,newData,dispatch) => {
  try {
    await axios.put(`${API_UPDATE}/${id}`, newData);
  } catch (err) {
    console.log(err)
  }
}

//----------------- API FEE
//DISABLE OLD FEE
export const disableFee= async(dispatch) => {
  try {
    await axios.put(API_DISABLE_FEE);
  } catch (err) {
    console.log(err)
  }
}

//UPDATE FEE
export const upDateFee= async(newFee,dispatch) => {
  try {
    await axios.post(API_UPDATE_FEE,newFee);
  } catch (err) {
    console.log(err)
  }
}

//GET FEE
export const getFee= async(dispatch) => {
  try {
    const res = await axios.get(API_GET_FEE);
    dispatch(getFeeSuccess(res.data));
  } catch (err) {
    console.log(err)
  }
}

//---------------APT COIN
//GET LND
export const getLnd = async(dispatch) => {
  try {
    const res = await axios.get(LNDCoin)
    dispatch(getLndApi(res.data));

  } catch (err) {
    console.log(err)
  }
}

//GET SINGLE COIN
export const getCoin = async(dispatch, idCoin) => {
  try {
    const res = await axios.get(SingleCoin(idCoin));
    console.log(res.data)
    dispatch(getCoinApi(res.data));
  } catch (err) {
    console.log(err)
  }
}

//-----------------API WALLET

export const  getWallet= async(dispatch, userId) => {
  try {
    const res = await axios.get(API_GET_WALLET(userId));
    // console.log(res.data.result);
    dispatch(getCoins(res.data.result));
  } catch (err) {
    console.log(err)
  }
}