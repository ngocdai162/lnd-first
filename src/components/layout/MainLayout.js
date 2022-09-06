import React, { useState } from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import Sider from '../common/Sider';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
 console.log("render");

    return (
        <div className='l-app'>
            <Sider/>
            <Header/>
            <div className="container">
              <div className='container__content'>
                 <Outlet/>
              </div>
              <Footer/>
            </div>
        </div>
    )
}
export default MainLayout;