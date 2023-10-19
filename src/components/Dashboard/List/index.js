import React from 'react'
import "./styles.css"
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { Tooltip } from '@mui/material';
import { convertNumber } from '../../../functions/convertNumber';

const List  = ({coin}) => {
  return (
    <tr   className="list-row">
        <Tooltip title="Coin Image" placement="bottom-start">
        <td className='td-image'>
            <img src={coin.image} className='coin-logo' />
        </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
        <td className='td-info'>
            <div className='name-col'>
                <p className='coin-symbol'>{coin.symbol}-USD</p>
                <p className='coin-name'>{coin.name}</p>
            </div>
        </td>
        </Tooltip>
        <Tooltip title="Coin Price Percentage In 24hrs" placement="bottom-start">
        <td>
        {
        coin.price_change_percentage_24h > 0 ?
        (<td className='chip-flex'>               
            <div className='price-chip'>+{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="chip-icon td-icon"><TrendingUpRoundedIcon /></div>
            
        </td>)
        :
        (<td className='chip-flex'>               
            <div className='price-chip red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div className="chip-icon chip-red td-icon"><TrendingDownRoundedIcon /></div>
         </td>)
        }
          </td>
        </Tooltip>
        <Tooltip title="Coin Price In USD" placement="bottom-end">
        <td className="info-container td-current-price">
            <h4 className="coin-price" style={{color:coin.price_change_percentage_24h>0 ? "var(--green)" : "var(--red)"}}>${coin.current_price.toLocaleString()}</h4>
        </td>
        </Tooltip>
        <Tooltip  title="Coin Total Volume" placement="bottom-end">
          <td>
          <p className="total-volume mob-tot-vol td-align-right">
              {(coin.total_volume).toLocaleString()}
          </p>
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className='desktop-td-mkt-cap'>
          <p className="market-cap td-align-right">
              ${(coin.market_cap).toLocaleString()}
          </p>
          </td>
        </Tooltip>
        <Tooltip title="Coin Market Capital" placement="bottom-end">
          <td className='mobile-td-mkt-cap'>
          <p className="market-cap td-align-right">
               ${convertNumber(coin.market_cap)}
          </p>
          </td>
        </Tooltip>
        
    </tr>
  )
}

export default List
