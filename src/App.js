import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './asset/scss/style.scss';
import 'antd/dist/antd.css';
import 'react-notifications-component/dist/theme.css';
import Home from './pages/Home';




function App() {

    return (
        // <Router>
        //     <div className={`p-app is-toggle`}>
        //         <div className="l-main">
        //             <Routes>
        //                 <Route exact path="/" element={<></>} />
                        
        //             </Routes>
        //         </div>
        //     </div>
        // </Router>
        <Home/>
        
    )
}

export default App;
