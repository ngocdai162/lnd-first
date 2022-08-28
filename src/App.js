import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './asset/scss/style.scss';
import 'antd/dist/antd.css';
import 'react-notifications-component/dist/theme.css';
import Sider from './components/common/SIder';
import Header from './components/common/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Footer from './components/common/Footer';
import FirstPage from './pages/FirstPage';
import ListCryptos from './components/container/ListCryptos';
import Register  from './pages/Register';
import UserEdit from './components/container/UserEdit';
import Swap from './components/container/Swap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { isUserSelector, tempSelector } from './redux/selectors';
import { setIsUser } from './redux/slice/isUserSlice';
import Wallet from './pages/Wallet';
// import { fetchListCrypto } from './redux/slice/listCryptoSlices';
import {  fetchListCrypto } from './redux/slice/listCryptoSlice';
import CoinInfo from './components/container/CoinInfo';
import CoinChart from './components/container/CoinChart';
import { useEffect } from 'react';
import { fetchLndCoin } from './redux/slice/tempSlice';
import ErrorPage from './pages/ErrorPage';
// import {fetchListCrypto} from './redux/slice/listCryptoSlice'
//Api Coin
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const dispatch = useDispatch();
  const isUser = useSelector(isUserSelector);
  setInterval(()=> {
    dispatch(fetchListCrypto())
  },1000)
  
//   useEffect(()=> {
//     const  u = localStorage.getItem('isUser');
//     u && JSON.parse(u) ? setIsUser(true) : setIsUser(false);
//   },[]);

//   useEffect(()=> {
//     localStorage.setItem('isUser', isUser)
//   },[isUser]);
//  console.log(isUser);
  window.addEventListener('load', (event) => {
     dispatch(setIsUser(false));
  });
  
    return (
     <Router>
        <Routes>
           {/* <Route path="" element={<ErrorPage/>} /> */}
           <Route path="" index element={<FirstPage/>} />
           {!isUser && <Route path="/login" element={<LoginPage/>}/>}
           <Route path="/register"element = {<Register/>}/>
           <Route path="/wallet"element = {<Wallet/>}/>
        </Routes> 
        {isUser &&
          <div className="l-app">
            <Sider />
            <Header/>
            <div className="container">
              <div className='container__content'>
                <Routes>
                   <Route path="/home" element={<Home/>} />
                   <Route path='/listCryptos' element={<ListCryptos/>}/>
                   <Route path='/swap' element={<Swap/>}/>
                   <Route path='/setting' element={<UserEdit/>}/>
                   <Route path='/chart' element={<CoinInfo/>}/>
                   <Route path='*' element={<ErrorPage/>}/>
                 </Routes>
              </div>
              <Footer/>
            </div>
          </div> 
        }
     </Router>
        
    )
}


export default App;
