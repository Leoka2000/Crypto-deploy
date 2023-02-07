import React from 'react'
import './coinPage.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";



const CoinPage = () => {

  let { id } = useParams();
  const [coin, setCoin] = useState("");


 

  useEffect(() => {

    
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
       
        setCoin(response.data);

      }
    );
  },
    []);






  return (

    <div className='coin-page'>
      <div className='coin-page-wrapper'>
        <div className='coins-icon-wrapper'>
        <h1>{coin.name}</h1>
        {typeof coin.image !== "undefined" ?    ( <img src={coin.image.large}></img>) :("")}
        </div>
        <div className='data-wrapper-parent'>
          {typeof coin.market_data !== "undefined" ? (<div className='data-wrapper-child'><p className='bold'>Current Price</p><p>$ {coin.market_data.current_price.usd.toLocaleString()}</p></div>) : ("")}
          {typeof coin.market_data !== "undefined" ? (<div className='data-wrapper-child'><p className='bold'>Market cap</p><p>$ {coin.market_data.market_cap.usd.toLocaleString()}</p></div>) : ("")}
          {typeof coin.market_data !== "undefined" ? (<div className='data-wrapper-child'><p className='bold'>Total volume</p><p>$ {coin.market_data.total_volume.usd.toLocaleString()}</p></div>) : ("")}
          {typeof coin.market_data !== "undefined" ? (<div className='data-wrapper-child'><p className='bold'>24hr High</p><p className='green'>$ {coin.market_data.high_24h.usd.toLocaleString()}</p></div>) : ("")}
          {typeof coin.market_data !== "undefined" ? (<div className='data-wrapper-child'><p className='bold'>24hr Low</p><p className='red'> $ {coin.market_data.low_24h.usd.toLocaleString()}</p></div>) : ("")}
       <Link to='/'>  <button className='btn btn-primary'>Go back</button></Link> 
        </div>
        

      </div>

    </div>
  );
}

export default CoinPage
