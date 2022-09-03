import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { coinChartSelector } from "../../redux/selectors";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import CoinChart from "./CoinChart";
import LndChart from "./LndChart";
import { Table } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { usersData } from "../../config/data";
import InputCustom from "../modules/InputCustom";
import ButtonCustom from "../modules/ButtonCustom";


const Admin = () => {
  console.log("admin");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [dataSearch,setDataSearch] = useState('');
    const [data,setData] =useState([]);
    const [totalPages,setTotalPages] = useState(0);
    const [filteredData,setFilteredData] = useState([]);
    const dataApi = usersData;
     
    const columns = [
        {
          title: "Name",
          key: 1,
          render: (payload) => (
            <div className="user-info">
              <CryptoLogo srcImg={payload.image}/>
              <p>{payload.name}</p>
            </div>
          )
        },
        {
          title: "Amount ( LND ) ",
          dataIndex: "amount",
          key: 2,
          sorter: (a, b) => a.amount - b.amount
          
        }
    ];
  //   useEffect (() => {
  //     setFilteredData(
  //       data.filter( (dataItem) => {
  //         console.log("chay")
  //         if(dataItem.userName.include(dataSearch))
  //         {
  //           return true;
  //         } 
  //         return false;
  //       }
  //       )
  //     );
  //     if(filteredData!=[]) {
  //     console.log(filteredData)
  //       setData(filteredData);
  //     }
  //  },[dataSearch])
    const loadRecords = (dataIndex) => {
           setData(dataApi);
      }
     useEffect(()=>{
        loadRecords(0)
      },[])
    const handleChange = (e) => {
      setDataSearch(e.target.value);
      console.log("ok");

   }
  
   
   
    return (
        <div className="admin">
            <div className="admin__chart coin-info__chart">
              <p>LND-COIN Price chart</p>
              <LndChart/>
            </div>
            <div className="admin__users">
              <p>Users</p>
              {/* <InputCustom placeholder= "search" event={handleChange}/> */}
              <Table
                 columns={columns}
                 dataSource={data}
                 pagination={{
                 pageSize: 6,
                 total:  totalPages,
                 onChange: (totalPages) => {
                  loadRecords(totalPages);
                 }
              }}
             />
            </div>
        </div>
    )
}
export default Admin;