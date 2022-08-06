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
import Register  from './pages/Register'
import Swap from './components/container/Swap';
import Wallet from './pages/Wallet';




function App() {
    const isUserAuth = true;
    return (
     <Router>
        <div className="l-app">
            <Sider />
            <Header/>
            <div className="container">
                <div className='container__content'>
                <Routes>
                   <Route path="/home" element={<Home/>} />
                   <Route path='/listCryptos' element={<ListCryptos/>}/>
                   <Route path='/swap' element={<Swap/>}/>
                  
                 </Routes>
                </div>
              <Footer/>
            </div>
        </div>
     </Router>
    // <FirstPage/>
    // <LoginPage/>
    // <Home/>
    // <Register/>
    // <Wallet/>
        
    )
}

export default App;
