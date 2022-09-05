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
import { currentUserSelector, isUserSelector, tempSelector } from './redux/selectors';
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
import ProtectedRoute from './components/layout/ProtectedRoute';
// import {fetchListCrypto} from './redux/slice/listCryptoSlice'
//Api Coin
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const dispatch = useDispatch();
  const isUser = useSelector(isUserSelector);
  const user = useSelector(currentUserSelector);
  console.log(user);
 
 
  // const [isUser, setIsUser] = useState(null);
  // setInterval(()=> {
  //   dispatch(fetchListCrypto())
  // },1000)

   

  //tạmmmmmmmmmmmm
  useEffect(()=> {
    dispatch(fetchListCrypto())

  },[]);
  
    return (
     <Router>
        <Routes>
           {/* Public Route */}
           <Route index path="/" element={<LoginPage/>}/>
           <Route path="/about"  element={<FirstPage/>} />
           <Route path="/register" element = {<Register/>}/>
           {/* <Route path="/wallet"element = {<Wallet/>}/> */}
           {/* Protected Route */}
           <Route element = {<ProtectedRoute/>}>
             <Route path="/home" element=<MainLayout/>>
                
                <Route path="" element={user?.roleId == 0 ? <Admin/> : <ListCryptos/>}/>
                {user?.roleId == 1 && 
                <>
                 <Route path='swap' element={<Swap/>}/>
                 <Route path='setting' element={<UserEdit/>}/>
                </> 
                }
                <Route path = 'listCryptos' element = {<ListCryptos/>}/>
                <Route path='chart' element={<CoinInfo/>}/>
                <Route path="wallet" element = {<Wallet/>}/>
             </Route>
           </Route>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes> 
     </Router>
        
    )
}


export default App;
