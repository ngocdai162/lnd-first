import React from "react";
import { FacebookOutlined } from '@ant-design/icons';
import { TwitterOutlined} from '@ant-design/icons';
import { YoutubeOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__logo">
                 <img src="../../images/lnd-logo.png" alt=""/>
                 <h1>LND-Project</h1>
                 <Link to= '/about'>About</Link>
            </div>
            <div className="footer__contact">
                <a href=""><FacebookOutlined/></a>
                <a href=""><TwitterOutlined/></a>
                <a href=""><YoutubeOutlined/></a>
                <a href=""><InstagramOutlined /></a>
            </div>
            <div  className="footer__end">
              <span>Copyright © 2022 Lnd.Org All Rights Reserved</span>
            </div>
        </div>
    )
}