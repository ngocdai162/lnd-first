// import { Table } from "antd";
import React from "react";
import {Link}  from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import { Table } from "antd";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import { useDispatch, useSelector } from "react-redux";
import { listCryptoSelector } from "../../redux/selectors";
import { fetchListCrypto } from "../../redux/slice/listCryptoSlice";
export default function ListCryptos() {
    const dispatch = useDispatch()
    const  dataApi  = useSelector(listCryptoSelector) ;
    console.log(dataApi)
    const [totalPages,setTotalPages] = useState(0);
    const moreItems = ["Edit","Infomation","Analytics","Whilelist","Remaining","Allocation"];
    const columns = [
        {
          title: "Name",
          key: 1,
          render: (payload) => (
            <div className="first-column">
              <CryptoLogo srcImg={payload.image}/>
              <p>{payload.name}</p>
            </div>
          )
        },
        {
          title: "Price",
          dataIndex: "current_price",
          key: 2,
          sorter: (a, b) => a.current_price - b.current_price
        },
        {
          title: "Market cap",
          dataIndex: "marketCap",
          key: 3,
          sorter: (a, b) => a.price - b.price
        },
        {
          title: "Action",
          dataIndex: "",
          key: 4,
          render: () => (
            <span className="swap-action">
              <Link to="/swap">Swap</Link>
            </span>
          )
        },
        {
          title: "Favorites",
          dataIndex: "favorite",
          key: 5,
          filters: [
            {
              text: 'Favorite',
              value: 'true',
            },
            {
              text: 'No Favorite',
              value: 'false',
            },
          ],
          onFilter: (value, record) => record.favorite.indexOf(value) === 0,
          render: (payload) => (
            <div>
               {payload== "true" && <i class="fa-solid fa-star favorite-star"></i>} 
               {payload== "false" &&  <i class="fa-solid fa-star"></i>} 
            </div>
          )
        }
    ]
    
    // const dataApi = [
    //     {
    //       name: "Bitcoin",
    //       imgSrc: "../images/cryptoLogo/bitcoin-btc-logo.png",
    //       price:"1000",
    //       marketCap: "10,000,000",
    //       favorite: "true",
    //     }
    // ]
    // console.log(dataApi.length)
    const [data,setData] =useState([]);
     const loadRecords = (dataIndex) => {
      console.log(dataIndex);
       setData(dataApi)
    }
    useEffect(()=>{
      loadRecords(0)
    },[])

    const [dataSearch,setDataSearch] = useState();
    const handleChange = (e) => {
      //  console.log(e.target.value);
       setDataSearch(e.target.value)
    }
    const handleSearch = () => {
      const filteredData = data.filter( (data) => {
        if(data.name==dataSearch)
        {
          return true;
        } 
        return false;

      }
      );
      setData(filteredData);
    }
   
    return (
        <div className="list-cryptos">
            <div className="list-cryptos__top">
               <div className="list-cryptos__top__highlight list-cryptos__top__item">
                 <p>Top hightlight crypto</p>
                 <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market cap</th>
                        <th></th>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[0].image}/>
                            <span>{dataApi[0].name}</span>
                        </td>
                        <td>{dataApi[0].current_price}</td>
                        <td>{dataApi[0].market_cap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[1].imgSrc}/>
                            <span>{dataApi[1].name}</span>
                        </td>
                        <td>{dataApi[1].price}</td>
                        <td>{dataApi[1].marketCap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[2].imgSrc}/>
                            <span>{dataApi[2].name}</span>
                        </td>
                        <td>{dataApi[2].current_price}</td>
                        <td>{dataApi[2].mmarket_cap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                 </table>
               </div>
               <div className="list-cryptos__top__new list-cryptos__top__item">
                 <p>Top low crypto</p>
                 <table>
                 <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market cap</th>
                        <th></th>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[0].image}/>
                            <span>{dataApi[dataApi.length - 1].name}</span>
                        </td>
                        <td>{dataApi[dataApi.length - 1].current_price}</td>
                        <td>{dataApi[dataApi.length - 1].market_cap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[dataApi.length - 2].image}/>
                            <span>{dataApi[dataApi.length - 2].name}</span>
                        </td>
                        <td>{dataApi[dataApi.length - 2].current_price}</td>
                        <td>{dataApi[dataApi.length - 2].market_cap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[dataApi.length - 3].image}/>
                            <span>{dataApi[dataApi.length - 3].name}</span>
                        </td>
                        <td>{dataApi[dataApi.length - 3].current_price}</td>
                        <td>{dataApi[dataApi.length - 3].market_cap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>           
                 </table>
               </div>
              
            </div>
            <div className="list-cryptos__all">
               <div className="list-cryptos__all__start">
                 <div className="list-cryptos__all__start__bar">
                   <p  className="list-cryptos__all__start__bar-active">All Cryptos</p>
                 </div>
                 <div className="list-cryptos__all__start__search">
                    <input placeholder="Search crypto" onChange={handleChange}/>
                    <button onClick={handleSearch}>Search</button>
                 </div>
               </div>
               <Table
                 columns={columns}
                 dataSource={data}
                 pagination={{
                 pageSize: 10,
                 total:  totalPages,
                 onChange: (totalPages) => {
                  loadRecords(totalPages);
                 },
              }}
             />
            </div>
        </div>
    )
}