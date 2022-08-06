import React from "react";
import DropdownCustom from "../modules/DropdownCustom";
import InputSearch from "../modules/InputSearch";

export default function Header() {
    const propsDropdown = {
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
                    <DropdownCustom item1 = 'Setting' item2 = 'Log out'/>
            </div>
        </div>
    )
}