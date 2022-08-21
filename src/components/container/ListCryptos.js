// import { Table } from "antd";
import React from "react";
import {Link, useNavigate}  from "react-router-dom";
import { useState, useEffect, useRef} from "react";
import { Table } from "antd";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
import { useDispatch, useSelector } from "react-redux";
import { listCryptoSelector } from "../../redux/selectors";
import { fetchListCrypto } from "../../redux/slice/listCryptoSlice";
import { swapToLND } from "../../redux/slice/coinSwapSlice";
export default function ListCryptos() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  dataApi  = useSelector(listCryptoSelector) ;
    const [totalPages,setTotalPages] = useState(0);
    const moreItems = ["Edit","Infomation","Analytics","Whilelist","Remaining","Allocation"];
    const handleClickSwap = (e) => {
      if(e.target.querySelector('input')!=null) {
        let coinSwap = dataApi.find((item)=> {
          return item.id == e.target.querySelector('input').value;
        })
        console.log(coinSwap)
        dispatch(swapToLND(coinSwap));
        navigate('/swap');
      }
    }
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
          dataIndex: "market_cap",
          key: 3,
          sorter: (a, b) => a.market_cap - b.market_cap
        },
        {
          title: "24h Change",
          dataIndex: "price_change_percentage_24h",
          key: 4,
          sorter: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
        },
        {
          title: "Action",
          dataIndex: "",
          key: 5,
          render: (payload) => (
            <div>
              <label className="swap-action" onClick={handleClickSwap}>
                 Swap
                 <input name = "coinId" value={payload.id}/>
              </label>
            
            </div>
          )
        },
        {
          title: "Favorites",
          dataIndex: "favorite",
          key: 6,
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
    
    // {id: 'tether', symbol: 'usdt', name: 'Tether', image: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707', current_price: 1.001, …}


    const [data,setData] =useState([]);
     const loadRecords = (dataIndex) => {
       setData(dataApi)
    }
    useEffect(()=>{
      loadRecords(0)
    },[dataApi])
    
    // useEffect(()=> {
    //   const coinSwap = dataApi.find((item)=> {
    //     return item.id == idSwap;
    //   })
    // },[idSwap])
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
                           <CryptoLogo srcImg = {dataApi[1].image}/>
                            <span>{dataApi[1].name}</span>
                        </td>
                        <td>{dataApi[1].current_price}</td>
                        <td>{dataApi[1].market_cap}</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr className="test">
                        <td className="crypto-name">
                           <CryptoLogo srcImg = {dataApi[2].image}/>
                            <span>{dataApi[2].name}</span>
                        </td>
                        <td>{dataApi[2].current_price}</td>
                        <td>{dataApi[2].market_cap}</td>
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
                           <CryptoLogo srcImg = {dataApi[dataApi.length - 1].image}/>
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