import React, { useState } from "react";
import {Link, Navigate} from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { setIsUser } from "../redux/slice/isUserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'; //chuyển hương trang
import { useSelector } from "react-redux";
import { currentUserSelector, isErrorLoginSelector, isUserSelector } from "../redux/selectors";
import { useEffect } from "react";
import { account } from "../config/data";
import { loginUser, registerUser } from "../redux/apiRequest";

// password: "dddddd"
// remember: true
// username: "dfddddd"
export default function LoginPage() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const user = useSelector(currentUserSelector);
   
  //  useEffect (()=> {
  //   if(user?.userName != "") {
  //     navigate("/home");
  //   }
  //  },[user])
   const isUser = useSelector(isUserSelector);
   const isErrorLogin = useSelector(isErrorLoginSelector);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        const newUser = {
           userName: values.username,
           passWord: values.password
        }
        loginUser(newUser, dispatch, navigate);
         navigate('/home'); 
    };
    const [forgotFlag,setForgotFlag] = useState(0);
    const handleForgot = () => {
      setForgotFlag(1);
    }
    return(
     <>
      { (user?.userName == "" || user == undefined ) ?
      <div className="p-login">
        <div className="p-login__block">
          <div className="p-login__block__left">
          <img src="../../images/lnd-logo.png" alt=""/>
          </div>
          <div className="p-login__block__right">
            <h1>Login</h1>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        {
          forgotFlag 
          && 
          <Form.Item
          name="code"
          rules={[
            {
              required: true,
              message: 'Please input your code!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Code"
          />
        </Form.Item>
        
        }
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
         
        </Form.Item>
        
        {
          forgotFlag 
          && 
          <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please confirm password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm password"
          />
        </Form.Item>
        
        }
        {isErrorLogin && <span class = 'login-fail'>Login failed !</span>}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <span className="login-form-forgot" href="" onClick={handleForgot}>
            Forgot password
          </span>
        </Form.Item>
  
        <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
             </Button>
          
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
          </div>
        </div> 
      </div> : <Navigate to = "/home"/> }
     </>
    );
  };
  
