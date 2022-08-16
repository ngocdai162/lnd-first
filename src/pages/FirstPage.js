import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/common/Footer";
import ButtonCustom from "../components/modules/ButtonCustom";
import { setIsUser } from "../redux/slice/isUserSlice";
export default function FirstPage() {
  // setIsUser(true);
    
    return( 
        <div className="p-first">

          <div className="p-first__content">
            <img  className = 'p-first__content__rocket'  src="../../images/rocket.png" alt=""/>
           
            <img src="../../images/lnd-logo.png" alt=""/>
            <span>LND PROJECT</span>
            <h1>We’re Revolutionizing the World  with Smart Contracts</h1>
            <p>Blockchain is awesome technology. “It’s a mathematical framework that is free of politics and human error”, as Tyler Winkelvoss states. And Eric Schmidt calls Bitcoin a “remarkable cryptographic achievement”. Leon Louw adds that Bitcoin might be one of the worlds most important developments.
               Blockchain technology does not often stand by itself but is usually mentioned in conjunction with crypto currencies. Tyler Winkelvoss mentions that they invest their money in Bitcoin, but David Marcus sees Bitcoin as an investment instrument as well. Julian Assange also refers primarily to the value of Bitcoin as he mentions that Bitcoin is currently taking off. Finally, Peter Thiel adds that Bitcoin was successful at the level of a new currency.
               Blockchain has disruptive power. Ginni Rometty mentions that Blockchain can vastly improve the efficiency of a supply chain. The co-founder of Ethereum, Vitalik Buterin, is even more explicit: Blockchain will make middlemen obsolete and therefore replace companies like, e.g. Uber.
               Blockchain still has a long way to go. Especially when we look at Peter Thiel’s statement that Bitcoin is still very difficult to use, it becomes apparent. On the one hand, this shows that Bitcoin is anything but perfect. On the other hand, it also shows that, despite the recent hype, there is still a lot of room for improvement. We can remain curious to see in which areas the blockchain will become more relevant in the long term.</p>
            <Link to="/logIn">
              <ButtonCustom text='Get Started'></ButtonCustom>
            </Link>
          </div>
          <Footer/>

        </div>
    )
}