import React from "react";
import DropdownCustom from "../modules/DropdownCustom";
import InputSearch from "../modules/InputSearch";

export default function Header() {
    return (
        <div className='header'>
            <h1>Dashboards</h1>
            <div className="header__search">
                <InputSearch/>
            </div>
            <div className='header__account'>
                    <div className="header__account__img">
                       <img src="../../images/avt.png"/>
                    </div>
                    <p>Đại</p>
                    <DropdownCustom/>
            </div>
        </div>
    )
}