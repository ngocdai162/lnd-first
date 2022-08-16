import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../modules/ButtonCustom";
import InputItem from "../modules/InputItem";
import UploadImage from "../modules/UploadImage";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
const UserEdit = () => {
  const user  = useSelector(userSelector);
  console.log(user);
  const handleCancel = () => {

  }
  const handleSave = () => {

  }
 

  // TEST Upload
 
  
  return(
    <div className="user-edit">
       <p className="user-edit__title">User info</p>
       <div className='user-edit__content'>
          <div className="user-edit__content__left">
            <InputItem title="User name"/>
            <InputItem title="Password"/>
            <InputItem title="Confirm password"/>
          </div>
          <div className="user-edit__content__right">
            <p>Avatar</p>
            <div className="user-edit__content__right__main">
              <UploadImage width= '152' event = {() => {}}/>
              <div className="user-edit__content__right__main__btn">
                <Link to='/listCryptos'>
                   <ButtonCustom event={handleCancel} text="Cancel"/>
                </Link>
                <Link to='/listCryptos'>
                   <ButtonCustom event={handleSave} text="Save"/>
                </Link>
              </div>
            </div>
          </div>
       </div>
       
    </div>
  )
}
export default UserEdit;