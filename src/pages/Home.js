import Search from "antd/lib/transfer/search";
import React from "react";
import ButtonCustom from "../components/modules/ButtonCustom";
import InputCustom from "../components/modules/InputCustom";
import InputSearch from "../components/modules/InputSearch";
import LndIcon from "../components/modules/LndIcon";
import SelectCustom from "../components/modules/SelectCustom";
import Header from "../components/common/Header";
import Sider from "../components/common/SIder";
import LoginPage from "./LoginPage";
import Register from "./Register";
export default function Home() {
    const listItem = ["1","2"]
    return(
        <div className="home">
         <Register/>
          
        </div>
    )
}