import Search from "antd/lib/transfer/search";
import React from "react";
import ButtonCustom from "../components/modules/ButtonCustom";
import InputCustom from "../components/modules/InputCustom";
import InputSearch from "../components/modules/InputSearch";
import LndIcon from "../components/modules/LndIcon";
import SelectCustom from "../components/modules/SelectCustom";
import Header from "../components/common/Header";
import Sider from "../components/common/SIder";
import Footer from "../components/common/Footer";
import LoginPage from "./LoginPage";
import Register from "./Register";
import SwitchCustom from "../components/modules/SwitchCustom";
import Container from "../components/common/Container";
import CryptoLogo from "../components/modules/modules__container/CryptoLogo";
export default function Home() {
    const listItem = ["1","2"]
    return(
        <div className="home">
            <div className="home__test">
               <p>Blockchain is awesome technology. “It’s a mathematical framework that is free of politics and human error”, as Tyler Winkelvoss states. And Eric Schmidt calls Bitcoin a “remarkable cryptographic achievement”. Leon Louw adds that Bitcoin might be one of the worlds most important developments.
               Blockchain technology does not often stand by itself but is usually mentioned in conjunction with crypto currencies. Tyler Winkelvoss mentions that they invest their money in Bitcoin, but David Marcus sees Bitcoin as an investment instrument as well. Julian Assange also refers primarily to the value of Bitcoin as he mentions that Bitcoin is currently taking off. Finally, Peter Thiel adds that Bitcoin was successful at the level of a new currency.
               </p>
            </div>
            <div className="home__test">
                <p>
                Blockchain technology does not often stand by itself but is usually mentioned in conjunction with crypto currencies. Tyler Winkelvoss mentions that they invest their money in Bitcoin, but David Marcus sees Bitcoin as an investment instrument as well. Julian Assange also refers primarily to the value of Bitcoin as he mentions that Bitcoin is currently taking off. Finally, Peter Thiel adds that Bitcoin was successful at the level of a new currency.
                </p>
                <ButtonCustom text = "Hhahaa" event={() => {}}/>
            </div>
        </div>
    )
}