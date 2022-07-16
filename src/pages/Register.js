import React, { useState } from "react";
import ButtonCustom from "../components/modules/ButtonCustom";
import InputCustom from "../components/modules/InputCustom";
import { Tabs } from 'antd';


export default function Register() {
    const { TabPane } = Tabs;
    const [activeTab,setActiveTab] = useState('1')
    const onChange = (key) => {
        console.log(key);
      
      };
    const clickNext = () => {
       if(activeTab=='1') {
         setActiveTab('2');
       } else
       if(activeTab=='2') {
        setActiveTab('3');
       } else
       if(activeTab=='3') {
        setActiveTab('4');
       } else 
       if(activeTab=='4') {
        setActiveTab('1');
       } 
    }
    const clickPrev = () => {
        if(activeTab=='1') {
            setActiveTab('4');
          } else
          if(activeTab=='2') {
           setActiveTab('1');
          } else
          if(activeTab=='3') {
           setActiveTab('2');
          } else 
          if(activeTab=='4') {
           setActiveTab('3');
          } 
    }
    return(
      <div className="p-register">
        <div className="p-register__block">
          <div className="p-register__block__left">
            <img src="../../images/lnd-logo.png" alt=""/>
          </div>
          <div className="p-register__block__right">
             <h1>Register</h1>
             <Tabs className="p-register__block__right__tabs" defaultActiveKey={activeTab} activeKey={activeTab} onChange={onChange}>
                <TabPane tab="Tab 1" key="1">
                   <div className="p-register__block__right__tabs__form">
                    <div className="p-register__block__right__tabs__form__item">
                      <p>Name</p>
                      <input/>
                    </div>
                    <div className="p-register__block__right__tabs__form__item p-register__block__right__tabs__form__btn">
                       <ButtonCustom text="Back" event = {clickPrev}/>
                       <ButtonCustom text="Continue" event = {clickNext}/>
                    </div>
                   </div>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                   <div className="p-register__block__right__tabs__form">
                    <div className="p-register__block__right__tabs__form__item">
                      <p>Name</p>
                      <input/>
                    </div>
                    <div className="p-register__block__right__tabs__form__item p-register__block__right__tabs__form__btn">
                       <ButtonCustom text="Back" event = {clickPrev}/>
                       <ButtonCustom text="Continue" event = {clickNext}/>
                     </div>
                   </div>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                       <ButtonCustom text="Back" event = {clickPrev}/>
                       <ButtonCustom text="Continue" event = {clickNext}/>
                </TabPane>
                <TabPane tab="Tab 4" key="4">
                    <ButtonCustom text="Back" event = {clickPrev}/>
                    <ButtonCustom text="Continue" event = {clickNext}/>
                </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  };
  
