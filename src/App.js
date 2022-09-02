import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './asset/scss/style.scss';
import 'antd/dist/antd.css';
import 'react-notifications-component/dist/theme.css';
import Sider from './components/common/Sider';
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
import MainLayout from './components/layout/MainLayout';
import Admin from './components/container/Admin';
// import {fetchListCrypto} from './redux/slice/listCryptoSlice'
//Api Coin
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const dispatch = useDispatch();
  const isUser = useSelector(isUserSelector);
  // const [isUser, setIsUser] = useState(null);
  // setInterval(()=> {
  //   dispatch(fetchListCrypto())
  // },1000)


  //tạmmmmmmmmmmmm
  useEffect(()=> {
    dispatch(fetchListCrypto())
  },[]);
  
//   useEffect(()=> {
//     const  u = localStorage.getItem('isUser');
//     u && JSON.parse(u) ? setIsUser(true) : setIsUser(false);
//     console.log(u);
//   },[]);

//   useEffect(()=> {
//     localStorage.setItem('isUser', isUser)
//   },[isUser]);
//  console.log(isUser);
  // window.addEventListener('load', (event) => {
  //    if(isUser == true) {
  //     dispatch(setIsUser(true));
  //    } else {
  //     dispatch(setIsUser(false));
  //    }
  // });
  
    return (
     <Router>
        <Routes>
           {/* <Route path="" element={<ErrorPage/>} /> */}
           <Route index  path=""  element={<FirstPage/>} />
           {!isUser && <Route path="/login" element={<LoginPage/>}/>}
           <Route path="/register" element = {<Register/>}/>
           <Route path="/login" element={<LoginPage/>}/>
           <Route path="/wallet"element = {<Wallet/>}/>
           {isUser ?
            <Route path="/home" element={<MainLayout/>}>
                <Route path='admin' element={<Admin/>}/>
                <Route path='listCryptos' element={<ListCryptos/>}/>
                <Route path='swap' element={<Swap/>}/>
                <Route path='setting' element={<UserEdit/>}/>
                <Route path='chart' element={<CoinInfo/>}/>
            </Route> :<Route path="/login" element={<LoginPage eventLogin = {()=> {setIsUser(true)}}/>}/>}
            <Route path='*' element={<ErrorPage/>}/>
        </Routes> 
     </Router>
        
    )
}


export default App;
