// import { Table } from "antd";
import React from "react";
import { useState, useEffect, useRef} from "react";
import { Table } from "antd";
import { StarOutlined} from '@ant-design/icons';
import InputSearch from "../modules/InputSearch"
import {Pagination} from "antd";
import ButtonCustom from "../modules/ButtonCustom";
import CryptoLogo from "../modules/modules__container/CryptoLogo";
export default function ListCryptos() {
    const [totalPages,setTotalPages] = useState(0);
    const moreItems = ["Edit","Infomation","Analytics","Whilelist","Remaining","Allocation"];
    const columns = [
        {
          title: "Name",
          key: 1,
          render: (payload) => (
            <div className="first-column">
              <CryptoLogo srcImg={payload.imgSrc}/>
              <p>{payload.name}</p>
            </div>
          )
        },
        {
          title: "Price",
          dataIndex: "price",
          key: 2,
          sorter: (a, b) => a.price - b.price
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
            <span className="swap-action">Swap</span>
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

    const dataApi = [
        {
          name: "Bitcoin",
          imgSrc: "../images/cryptoLogo/bitcoin-btc-logo.png",
          price:"1000",
          marketCap: "10,000,000",
          favorite: "true",
        },
        {
          name: "Terra",
          imgSrc: "../images/cryptoLogo/terra-luna-luna-logo.png",
          price:"2000",
          marketCap: "10,000,000",
          favorite: "true"
        },
        {
          name: "Solana",
          imgSrc: "../images/cryptoLogo/solana-sol-logo.png",
          price:"1500",
          marketCap: "10,000,000",
          favorite: "false"

        },
        {
          name: "Shiba",
          imgSrc: "../images/cryptoLogo/shiba-inu-shib-logo.png",
          price:"4000",
          marketCap: "10,000,000",
          favorite: "true"
        }
    ]
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
                           <CryptoLogo srcImg = "../images/cryptoLogo/bitcoin-btc-logo.png"/>
                            <span>Shiba</span>
                        </td>
                        <td>100000000</td>
                        <td>20000000000</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="crypto-name">
                           <CryptoLogo srcImg = "../images/cryptoLogo/bitcoin-btc-logo.png"/>
                            <span>Shiba</span>
                        </td>
                        <td>1000</td>
                        <td>20000</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="crypto-name">
                           <CryptoLogo srcImg = "../images/cryptoLogo/bitcoin-btc-logo.png"/>
                            <span>Shiba</span>
                        </td>
                        <td>1000</td>
                        <td>20000</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                   
                   
                    

                 </table>
               </div>
               <div className="list-cryptos__top__new list-cryptos__top__item">
                 <p>Top hightlight crypto</p>
                 <table>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market cap</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td className="crypto-name">
                           <CryptoLogo srcImg = "../images/cryptoLogo/bitcoin-btc-logo.png"/>
                            <span>Shiba</span>
                        </td>
                        <td>1000</td>
                        <td>20000</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="crypto-name">
                           <CryptoLogo srcImg = "../images/cryptoLogo/bitcoin-btc-logo.png"/>
                            <span>Shiba</span>
                        </td>
                        <td>1000</td>
                        <td>20000</td>
                        <td>
                          <span>Swap</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="crypto-name">
                           <CryptoLogo srcImg = "../images/cryptoLogo/bitcoin-btc-logo.png"/>
                            <span>Shiba</span>
                        </td>
                        <td>1000</td>
                        <td>20000</td>
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
                 pageSize: 2,
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