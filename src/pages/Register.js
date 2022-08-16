import React, { useEffect, useState } from "react";
import {Tabs , Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import ButtonCustom from "../components/modules/ButtonCustom";
import InputCustom from "../components/modules/InputCustom";
import UploadImage from "../components/modules/UploadImage";
import isUserSlice, { register, setIsUser } from "../redux/slice/isUserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; //chuyển hương trang



export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [saveFlag,setSaveFlag] = useState(false);
    const [name,setName] = useState(false);
    const [mail,setMail] = useState(false);
    const [avatar,setAvatar] = useState(false);
    const [pass,setPass] = useState(false);
    const [passConfirm,setPassConfirm] = useState(false);
    const [passFlag,setPassFlag] = useState(false);
    const nameOnChange = (e) => {
      setName(e.target.value);
      console.log(name);
    }
    const mailOnChange = (e) => {
      setMail(e.target.value);
    }
    const passOnchange = (e) => {
      setPass(e.target.value);
    }
    const passConfirmOnchange = (e) => {
      setPassConfirm(e.target.value);
    }
    useEffect(()=> {
      if(pass && passConfirm && (pass === passConfirm)) {
        setPassFlag(true);
        console.log("đúng");
      } else {
        setPassFlag(false);
      }
    },[pass,passConfirm])
    const getAvt = (data) => {
      setAvatar(data)
      console.log(data);
      // return data;
    }
    const { TabPane } = Tabs;
    const [activeTab,setActiveTab] = useState('1');
    const onChange = (key) => {
        console.log(key);
      
      };
    const clickNext = () => {
       if(activeTab=='1') {
         setActiveTab('2');
       } else
       if(activeTab=='2') {
        setActiveTab('3');
        setSaveFlag(true);
       } else
       if(activeTab=='3') {
        setActiveTab('1');
        setSaveFlag(false);

       }  
    }
    const clickPrev = () => {
        if(activeTab=='1') {
            setActiveTab('3');
            setSaveFlag(true);
          } else
          if(activeTab=='2') {
           setActiveTab('1');
          } else
          if(activeTab=='3') {
           setActiveTab('2');
           setSaveFlag(false);
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
   const handleSave = () => {
     if(name && mail && avatar && passFlag) {
      console.log("ok roi nay");
      navigate('/listCryptos');   
     dispatch(setIsUser(true));
     }
   }

  
   
    return(
      <div className="p-register">
        <div className="p-register__block">
          <div className="p-register__block__left">
            <img src="../../images/lnd-logo.png" alt=""/>
          </div>
          <div className="p-register__block__right">
             <h1>SIGN UP</h1>
             <Tabs className="p-register__block__right__tabs" defaultActiveKey={activeTab} activeKey={activeTab} onChange={onChange}>
                <TabPane tab="" key="1">
                   <div className="p-register__block__right__tabs__form">
                     <div className="p-register__block__right__tabs__form__content">
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Name</p>
                          <input onChange={nameOnChange}/>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Mail</p>
                          <input onChange={mailOnChange}/>
                        </div>
                     </div>
                   </div>
                </TabPane>
                <TabPane tab="" key="2">
                   <div className="p-register__block__right__tabs__form p-register__block__right__tabs__form-avatar ">
                     <p>Upload avatar</p>
                     <div className="p-register__block__right__tabs__form__content upload-avt">
                       <UploadImage width="150" event = {getAvt}/>
                     </div>
                   </div>
                </TabPane>
                <TabPane tab="" key="3">
                   <div className="p-register__block__right__tabs__form">
                     <div className="p-register__block__right__tabs__form__content">
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Password</p>
                          <input onChange={passOnchange} type="password"/>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Confirm Password</p>
                          <input onChange={passConfirmOnchange} type="password"/>
                        </div>
                     </div>
                   </div>
                </TabPane>
            </Tabs>
            <div className="p-register__block__right__tabs__form__item p-register__block__right__tabs__form__btn">
                <ButtonCustom text="Back" event = {clickPrev}/>
                {saveFlag ? 
                    <ButtonCustom text="Save" event = {handleSave}/>
                 
                : <ButtonCustom text="Continue" event = {clickNext}/> }
                
            </div>
          </div>
        </div>
      </div>
    );
  };
  
