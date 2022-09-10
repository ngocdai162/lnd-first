//AUTH
export const  API_LOGIN = "http://localhost:8080/user/login";
export const API_LOGOUT = "http://localhost:8080/user/logout";
export const API_REGISTER ="http://localhost:8080/user/register";
export const API_UPDATE = "http://localhost:8080/user/update";

//ADMIN
export const API_LIST_USER = "http://localhost:8080/user/all"

//FEE
export const API_UPDATE_FEE = "http://localhost:8080/fee/update";
export const API_DISABLE_FEE = "http://localhost:8080/fee/disable";
export const API_GET_FEE = "http://localhost:8080/fee/get";

//WAllET 
export const API_CREATE_WALLET = "http://localhost:8080/wallet/create";
export const API_GET_WALLET = (userId) => `http://localhost:8080/wallet/${userId}`;
export const API_CHECK_WALLET = "http://localhost:8080/wallet/check";
export const API_ADD_COIN = "http://localhost:8080/wallet/add";
export const API_UPDATE_COIN = "http://localhost:8080/wallet/update";





