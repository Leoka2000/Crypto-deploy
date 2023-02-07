
import './home.css'
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Coins from '../components/coin'
import { FiRefreshCcw } from 'react-icons/fi/index.esm'
//We will do the search component herecd
function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => { 
    refreshPage();
  }, []);
  const handleChange = e => {
    setSearch(e.target.value); // We will access the value provided by the input, we will assign this function to the INPUT BOX
  };


  const refreshPage = () => {
    setIsLoading(true); // SETTING THE LOADING STATE TO TRUE
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      setIsLoading(false); // SETTING LOADING STATE TO FALSE ONCE THE API DATA HAS BEEN FETCHED
      setCoins(response.data);
    });
  };

 

  const filteredCoins = coins.filter(coins =>
    coins.name.toLowerCase().includes(search.toLowerCase())
  );
 

  
  return (
    <div className="App">
      <div className='coin-search'>
        <form>
          <h1>Leo's CryptoVisualizer</h1>
          <div className='input-wrapper'>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
          <button onClick={refreshPage}><FiRefreshCcw/></button>  {/*CALLING THE */}
          </div>
        </form>
      </div>
      {isLoading && <h1 className="loadingMssg">Data Loading...</h1>}
      {filteredCoins.map(coins => {
        return (
          <Coins 
          id={coins.id}
              icon={coins.image}
              coinName={coins.name}
              coinSymbol={coins.symbol} 
              price={coins.current_price} // {/*PASSING PROPS TO THE COIN COMPONENT*/}
              marketCap={coins.market_cap}
              priceChange={coins.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default Home;
