import React from 'react'
import { useNavigate , useParams, Link} from 'react-router-dom';
import './coin.css'


const Coins = ({
    icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
  id,
    
}) => {
    
    const navigate = useNavigate()

    function handleClick() {
      // Submit form results
      navigate(`/CoinPage/${id}`, { replace: false, state: { icon, coinName, coinSymbol, price, marketCap, priceChange, id}})
    }

 
    return (
        <div className='coin-parent-section-container'>
            <div className='coin-parent-container'>
                <div className='coin-individual-parent'>
                    
                <img src={icon}></img>
                        <h2>{coinName}</h2>
                        <h3 className='coin-symbol'>{coinSymbol}</h3>
                    
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price.toFixed(2)}</p>
                    <p className='coin-volume'></p> $ {marketCap.toLocaleString()}


            {priceChange < 0 ? (    
            <p className='coin-percent-red'>{priceChange.toFixed(2)}%</p>
            ) :(
            <p className='coin-percent-green'>{priceChange.toFixed(2)}%</p>
            )}
                    <button type='button' onClick={handleClick}>More info</button>
                </div>
    
            </div>
        </div>
    )
}

export default Coins
