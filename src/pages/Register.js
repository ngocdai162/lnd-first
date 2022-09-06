import React, { useEffect, useRef, useState } from "react";
import {Tabs , Button, message, Upload } from 'antd';
import Avatar from 'react-avatar-edit';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import ButtonCustom from "../components/modules/ButtonCustom";
import InputCustom from "../components/modules/InputCustom";
import UploadImage from "../components/modules/UploadImage";
import isUserSlice, { register, setIsUser } from "../redux/slice/isUserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; //chuyển hương trang
import { registerUser } from "../redux/apiRequest";



export default function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newUser,setNewUser] = useState({});
    const [saveFlag,setSaveFlag] = useState(false);
    const [name,setName] = useState(false);
    const [fullName,setFullName] = useState(false);
    const [mail,setMail] = useState(false);
    const [avatar,setAvatar] = useState(false);
    const [pass,setPass] = useState(false);
    const [passConfirm,setPassConfirm] = useState(false);
    const [passFlag,setPassFlag] = useState(false);
    const nameInputFail = useRef();
    const fullNameInputFail = useRef();
    const avatarInputFail= useRef();
    const mailInputFail = useRef();
    const passInputFail = useRef();
    const passConfirmInputFail = useRef();
    // const validateName = (name) => {
    //   // var validNameRegex =  /^[a-zA-Z\-]+$/
    //   var validNameRegex =  /$/

    //   if(name.match(validNameRegex)) {
    //     return true
    //   }
    //   return false;
    // }
    const validateEmail = (email) => {
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegex)) {
         return true;
      }
      return false;
    }

    const nameOnChange = (e) => {
      setName(e.target.value);
      console.log(name);
    }
    const fullNameOnChange = (e) => {
      setFullName(e.target.value);
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

   //xử lý lấy ảnh
   const [src,setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
    const onClose = () => {
        setPreview(null);
    }
    const onCrop =  view => {
        setPreview(view);
    }
    useEffect(()=> {
      setAvatar(preview);
    },preview)

   const [nameError,setNameError] = useState("");
   const handleSave = () => {
     if(name =='')  {
       setNameError('Required');
       nameInputFail.current.classList.remove('none');
     } 
     else if(name.length < 4) {
          setNameError('Must be 4 character or more');
          nameInputFail.current.classList.remove('none');
     }
     if(fullName =='') {
     fullNameInputFail.current.classList.remove('none');
    } else {
      fullNameInputFail.current.classList.add('none');
    }

     if((mail =='') || (validateEmail(mail) == false)) {
        mailInputFail.current.classList.remove('none');
    } else {
      mailInputFail.current.classList.add('none');
     }

    if(avatar !=false) {
      avatarInputFail.current.classList.remove('none');
    } else {
      avatarInputFail.current.classList.add('none');
     }

    if(pass =='' || pass.length<6) {
      passInputFail.current.classList.remove('none');
    } else {
      passInputFail.current.classList.add('none');
     }

    if((passConfirm =='') || (passConfirm != pass)){
      passConfirmInputFail.current.classList.remove('none');
    } else {
      passConfirmInputFail.current.classList.add('none');
     }

    if(name && mail && avatar && passFlag) {
      console.log("ok roi nay");

     console.log({
        id: uuidv4(),
        name: name,
        fullName: fullName,
        mail: mail,
        avatar: avatar,
        pass: pass
     })
   
      // dispatch(.....(newUser)) dispatch create 
    
      registerUser({
        userId: uuidv4(),
        email: mail,
        passWord: pass,
        userName: name,
        imgSrc:  avatar,
        fullName:fullName,
      }, dispatch,navigate);
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
                          <p>User Name</p>
                          <input onChange={nameOnChange}/>
                          <span class="none" ref={nameInputFail}>{nameError}</span>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Full name</p>
                          <input onChange={fullNameOnChange}/>
                          <span class="none" ref={fullNameInputFail}>Please input your full name!</span>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Mail</p>
                          <input onChange={mailOnChange}/>
                          <span class="none" ref={mailInputFail}>Please input your email!</span>
                        </div>
                     </div>
                   </div>
                </TabPane>
                <TabPane tab="" key="2">
                   <div className="p-register__block__right__tabs__form p-register__block__right__tabs__form-avatar ">
                     <p>Upload avatar</p>
                     <div className="p-register__block__right__tabs__form__content upload-avt">
                     <Avatar
                        width={200}
                        height= {200}
                        onCrop={onCrop}
                        onClose = {onClose}
                        src={src}
                        />
                     {preview && <img src={preview} style={{
                        width: `200px`,
                        height: `200px`
                     }}/>}
                     </div>
                     <span class="" ref={avatarInputFail}>Please upload image!</span>
                   </div>
                </TabPane>
                <TabPane tab="" key="3">
                   <div className="p-register__block__right__tabs__form">
                     <div className="p-register__block__right__tabs__form__content">
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Password</p>
                          <input onChange={passOnchange} type="password"/>
                          <span class="none" ref={passInputFail}>Must be 6 character or more</span>
                        </div>
                        <div className="p-register__block__right__tabs__form__content__item">
                          <p>Confirm Password</p>
                          <input onChange={passConfirmOnchange} type="password"/>
                          <span class="none" ref={passConfirmInputFail}>Please confirm password!</span>
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
  
