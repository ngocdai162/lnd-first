import React, { useState , useRef,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/selectors";
import { useFormik } from "formik";
import * as Yup from "yup";
import Avatar from 'react-avatar-edit';
const UserEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user  = useSelector(userSelector);
  console.log(user);

  // formik validate
  const formik = useFormik({
    initialValues: {
      name:"",
      password: "",
      confirmPassword: "",
      avt:""
    },
    validationSchema: Yup.object({
      name: Yup.string()
          .required("Required")
          .min(4, "Must be 4 character or more"),
      password: Yup.string()
          .required("Required")
          .min(6,"Must be 6 character or more"),
      confirmPassword: Yup.string()
          .required("Required")
          .oneOf([Yup.ref("password"),null],"Password must match"),
      avt : Yup.string()
          .required("Required")
    }),
    onSubmit: (values) => {
      //userUPdate = values   dispatch update 
      console.log(values);
      navigate('/listCryptos');
    }
  })
  
    //xử lý lấy avatar
    const [src,setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
    const onClose = () => {
        setPreview(null);
    }
    const onCrop =  view => {
        setPreview(view);
    }
    useEffect(()=> {
      formik.values.name = user.name;
      formik.values.avt = user.avt;
      setPreview(user.avt);
    },[])
    useEffect(()=> {
      formik.values.avt = preview;
     },[preview])
  return(
    <div className="user-edit">
       <p className="user-edit__title">User info</p>
       <div className='user-edit__content'>
          <div className="user-edit__content__left">
            <form onSubmit={formik.handleSubmit}>
              <label>Name</label>
              <input
                 className="primary-input"
                 type='text'
                 id='name'
                 name='name'
                 value={formik.values.name}
                 onChange={formik.handleChange}
                 placeholder="Enter your name"
              />
              {formik.errors.name
              && (<p className="formit-errors">{formik.errors.name}</p>)}
              <label>Password</label>
              <input
                className="primary-input"
                 type='password'
                 id='password'
                 name='password'
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 placeholder="Enter your name"
              />
              {formik.errors.password
              && (<p className="formit-errors">{formik.errors.password}</p>)}
              <label>Confirm password</label>
              <input
                className="primary-input"
                 type='password'
                 id='confirmPassword'
                 name='confirmPassword'
                 value={formik.values.confirmPassword}
                 onChange={formik.handleChange}
                 placeholder="Enter your name"
              />
              {formik.errors.confirmPassword
              && (<p className="formit-errors">{formik.errors.confirmPassword}</p>)}
              <input
                 type='text'
                 id='avt'
                 name='avt'
                 value={formik.values.avt}
                 onChange={formik.handleChange}
                 style ={{
                  width: '0px',
                  border: '0px',
                  padding: '0px'
                 }}
              />   
              <div>
                 <button className="primary-btn submit-btn btn-1" onClick={() => {navigate('/listCryptos')}} >Cancel</button>
                 <button type = 'submit' className="primary-btn submit-btn">Submit</button>
              </div>
            </form>
          </div>
          <div className="user-edit__content__right">
            <p>Avatar</p>
            <div className="user-edit__content__right__main">
            <div className='upload-image'>
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
            {formik.errors.avt
              && (<p className="formit-errors">{formik.errors.avt}</p>)}
            </div>
          </div>
       </div>
       
    </div>
  )
}
export default UserEdit;