import React, { useState } from "react";
import ButtonCustom from "../components/modules/ButtonCustom";
import InputCustom from "../components/modules/InputCustom";
import { Tabs } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';


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
        setActiveTab('1');
       }  
    }
    const clickPrev = () => {
        if(activeTab=='1') {
            setActiveTab('3');
          } else
          if(activeTab=='2') {
           setActiveTab('1');
          } else
          if(activeTab=='3') {
           setActiveTab('2');
          }
    }
   //upload
   const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
   
    return(
      <div className="p-register">
        <div className="p-register__block">
          <div className="p-register__block__left">
            <img src="../../images/lnd-logo.png" alt=""/>
          </div>
          <div className="p-register__block__right">
             <h1>SIGN UP</h1>
             <Tabs className="p-register__block__right__tabs" defaultActiveKey={activeTab} activeKey={activeTab} onChange={onChange}>
                <TabPane tab="Tab 1" key="1">
                   <div className="p-register__block__right__tabs__form">
                     <div className="p-register__block__right__tabs__form__content">
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Name</p>
                          <input/>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Mail</p>
                          <input/>
                        </div>
                     </div>
                   </div>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                   <div className="p-register__block__right__tabs__form">
                     <div className="p-register__block__right__tabs__form__content upload-avt">
                       <Upload {...props} accept='image/*'>
                         <Button icon={<UploadOutlined />}>Click to Upload</Button>
                       </Upload>
                     </div>
                   </div>
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                   <div className="p-register__block__right__tabs__form">
                     <div className="p-register__block__right__tabs__form__content">
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Password</p>
                          <input/>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Confirm Password</p>
                          <input/>
                        </div>
                     </div>
                   </div>
                </TabPane>
            </Tabs>
            <div className="p-register__block__right__tabs__form__item p-register__block__right__tabs__form__btn">
                <ButtonCustom text="Back" event = {clickPrev}/>
                <ButtonCustom text="Continue" event = {clickNext}/>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
