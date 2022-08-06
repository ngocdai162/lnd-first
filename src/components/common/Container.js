import React from "react";
import ButtonCustom from "../modules/ButtonCustom";
import Footer from "./Footer";
export default function Container() {
    return (
         <div className="container">
            <div className="container__main">
              <ButtonCustom text="Connect"/>
            </div>
            <Footer/>
         </div>
        
    )
}