import React, { useEffect } from "react";
import DropdownCustom from "../modules/DropdownCustom";
import InputSearch from "../modules/InputSearch";
import { setIsUser } from "../../redux/slice/isUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { NavLink, useNavigate } from "react-router-dom";
import { currentUserSelector} from "../../redux/selectors";
import { logOut } from "../../redux/apiRequest";

// accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRob25nIiwiaWF0IjoxNjYyNDYwNDI3fQ.sn2ubYPTuMop14Y8sZVBshtTZxKCGWaNT0uELpLeULc"
// email: "thong@gmail.com"
// fullName: "minh thong"
// isDeleted: false
// imgSrc
// passWord: "$2b$10$VO3P/zi6.Ue/Iy6tZJMJI.GKt/dy.dQWYpPq0GGjGJcZki.5zUmT."
// roleId: 1
// userId: "69709f40-6bfa-449d-b7bc-2b0872214d34"
// userName: "thong"
export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(currentUserSelector);
    console.log(user);
    const accessToken = user?.accessToken;
    const userName = user?.userName;
    const isAdmin  = false;
    const propsDropdown = {
        event1 : () => {
            dispatch(setIsUser(true));
        },
        event2 : () => {
            dispatch(setIsUser(false));
        },
        item1 : "Setting",
        item2: "Log out"
    }
    const handleLogOut = () => {
            // logOut(dispatch,userName,navigate, accessToken);
            logOut(dispatch,userName,navigate);

        // navigate('/login');
    }
    return (
        <div className='header'>
            <h1>Dashboards</h1>
            <div className="header__menu">
                <ul>
                    <li>
                        <NavLink  
                         className={({ isActive }) =>
                         isActive ? "activeClass" : undefined
                         }
                        to = "/home/listCryptos">Cryptos</NavLink>
                    </li>
                    {user?.roleId == 0 && <li>
                        <NavLink  
                         className={({ isActive }) =>
                         isActive ? "activeClass" : undefined
                         }
                        to = "/home/">Admin System</NavLink>
                    </li>}
                    {user?.roleId  == 1 && <li>
                        <NavLink 
                         className={({ isActive }) =>
                         isActive ? "activeClass" : undefined
                         }
                        to ="/home/setting">Setting</NavLink>
                    </li>}
                    {user?.roleId  == 1 && <li>
                        <NavLink 
                         className={({ isActive }) =>
                         isActive ? "activeClass" : undefined
                         }
                        to ="/home/wallet">Wallet</NavLink>
                    </li>}
                    
                </ul>
            </div>
            {user.roleId == 0 ?
              <div className='header__account acount-admin'>
                <Avatar size={48} icon={<UserOutlined />} />
                <p>Admin</p>
                <span onClick={handleLogOut}>Log Out</span>
              </div>
              :<div className='header__account'>
                    <div className="header__account__img">
                       <img src="../../images/avt.png"/>
                    </div>
                    <p>{user.fullName}</p>
                    <span onClick={handleLogOut}>Log out</span>
               </div>
            }
        </div>
    )
}