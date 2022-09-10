import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer  from './slice/userSlice'
import isUserReducer from "./slice/isUserSlice";
import listCryptoReducer from "./slice/listCryptoSlice";
import walletReducer from "./slice/walletSlice";
import lndCoinReducer from "./slice/lndCoinSlice";
import coinActiveReducer from "./slice/walletSlice";
import coinSwapReducer from "./slice/coinSwapSlice";
import lndMarketCapReducer from "./slice/lndMarketCapSlice";
import coinChartReducer from "./slice/coinChartSlice";
import authReducer from "./slice/authSlice";
import tempReducer from "./slice/tempSlice";
import projectReducer from "./slice/projectSlice";
import feeReducer from "./slice/feeSlice";
import lndApiReducer from "./slice/lndApiSlice";
import coinReducer from "./slice/coinSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
    isUser: isUserReducer,
    user: userReducer,
    listCrypto : listCryptoReducer,
    wallet: walletReducer,
    lndCoin: lndCoinReducer,
    coinSwap: coinSwapReducer,
    lndMarketCap: lndMarketCapReducer,
    coinChart: coinChartReducer,
    temp : tempReducer,
    project: projectReducer,
    auth: authReducer,
    fee: feeReducer,
    lndApi: lndApiReducer,
    coin: coinReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store);

export const resetStore = async () => {
  await persistor.purge();
  storage.removeItem("root");
};