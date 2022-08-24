import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './slice/userSlice'
import isUserReducer from "./slice/isUserSlice";
import listCryptoReducer from "./slice/listCryptoSlice";
import walletReducer from "./slice/walletSlice";
import lndCoinReducer from "./slice/lndCoinSlice";
import coinActiveReducer from "./slice/walletSlice";
import coinSwapReducer from "./slice/coinSwapSlice";
import lndMarketCapReducer from "./slice/lndMarketCapSlice";
const store = configureStore({
    reducer: {
        isUser: isUserReducer,
        user: userReducer,
        listCrypto : listCryptoReducer,
        wallet: walletReducer,
        lndCoin: lndCoinReducer,
        coinSwap: coinSwapReducer,
        lndMarketCap: lndMarketCapReducer
        // test : testReducer
    }
})
export default store;