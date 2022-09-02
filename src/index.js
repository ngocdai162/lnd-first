import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
// import store from './store';
import { Web3ReactProvider } from "@web3-react/core";
//import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";


function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;

  return library;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <Web3ReactProvider getLibrary={getLibrary}>
          <App />
       </Web3ReactProvider>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
