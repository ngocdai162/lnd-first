import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './slice/userSlice'
import isUserReducer from "./slice/isUserSlice";
import listCryptoReducer from "./slice/listCryptoSlice";
const store = configureStore({
    reducer: {
        isUser: isUserReducer,
        user: userReducer,
        listCrypto : listCryptoReducer,
        // test : testReducer
    }
})
export default store;