import React from "react";
import DropdownCustom from "../modules/DropdownCustom";
import InputSearch from "../modules/InputSearch";
import { setIsUser } from "../../redux/slice/isUserSlice";
import { useDispatch } from "react-redux";

export default function Header() {
    const dispatch = useDispatch();
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
    return (
        <div className='header'>
            <h1>Dashboards</h1>
            <div className="header__search">
                <InputSearch text = "Search"/>
            </div>
            <div className='header__account'>
                    <div className="header__account__img">
                       <img src="../../images/avt.png"/>
                    </div>
                    <p>Đại</p>
                    <DropdownCustom propsDropdown = {propsDropdown}/>
            </div>
        </div>
    )
}