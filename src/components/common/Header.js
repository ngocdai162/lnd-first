import React from "react";
import DropdownCustom from "../modules/DropdownCustom";
import InputSearch from "../modules/InputSearch";
import { setIsUser } from "../../redux/slice/isUserSlice";
import { useDispatch } from "react-redux";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { useNavigate } from "react-router-dom";


export default function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
        dispatch(setIsUser(false));
        navigate('/login');
    }
    return (
        <div className='header'>
            <h1>Dashboards</h1>
            <div className="header__search">
                <InputSearch text = "Search"/>
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
                    <DropdownCustom propsDropdown = {propsDropdown}/>
               </div>
            }
        </div>
    )
}