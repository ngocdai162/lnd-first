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


export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(currentUserSelector);
    const accessToken = user?.accessToken;
    const userName = user?.userName;
    useEffect(() => {
        console.log(user);
    },[])
    // const isAdmin = true;
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
                    {user?.isAdmin == 1 && <li>
                        <NavLink  
                         className={({ isActive }) =>
                         isActive ? "activeClass" : undefined
                         }
                        to = "/home/">Admin System</NavLink>
                    </li>}
                    {user?.isAdmin  == 0 && <li>
                        <NavLink 
                         className={({ isActive }) =>
                         isActive ? "activeClass" : undefined
                         }
                        to ="/home/setting">Setting</NavLink>
                    </li>}
                    
                </ul>
            </div>
            {isAdmin ?
              <div className='header__account acount-admin'>
                <Avatar size={48} icon={<UserOutlined />} />
                <p>Admin</p>
                <span onClick={handleLogOut}>Log Out</span>
              </div>
              :<div className='header__account'>
                    <div className="header__account__img">
                       <img src="../../images/avt.png"/>
                    </div>
                    <p>Đại</p>
                    <span onClick={handleLogOut}>Log out</span>
               </div>
            }
        </div>
    )
}