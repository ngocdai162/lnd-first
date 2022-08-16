import React from 'react';
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
import ForgotPass from './pages/ForgotPass';
import ListCryptos from './components/container/ListCryptos';
import Register  from './pages/Register';
import UserEdit from './components/container/UserEdit';
import Swap from './components/container/Swap';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { isUserSelector } from './redux/selectors';
import { setIsUser } from './redux/slice/isUserSlice';

import Wallet from './pages/Wallet';

function App() {
  const dispatch = useDispatch();
  window.addEventListener('load', (event) => {
     dispatch(setIsUser(false));
  });
    const isUser = useSelector(isUserSelector);
    // const user = useSelector(state => state.user);
    return (
     <Router>

        <Routes>
           <Route path="" element={<FirstPage/>} />
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
