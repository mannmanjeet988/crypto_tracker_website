import React, { useEffect,useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Common/Header";
import Loader from "../../components/Common/Loader";
import List from "../../components/Dashboard/List";
import {coinObject} from "../../functions/coinObject"
import axios from "axios";
import CoinInfo from "../../components/Coin/CoinInfo";
import { getCoinData } from "../../functions/getCoinData";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();

  useEffect(()=>{
    getData()
  },[id])

  const getData = async () => {
     setIsLoading(true);
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data); //For Coin Obj being passed in the List
      console.log(coinData)
      // const prices = await getCoinPrices(id, days, priceType);
      // if (prices) {
      //   settingChartData(setChartData, prices, data);
      //   isLoading(false);
      // }
      setIsLoading(false)
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : 
      (<>
      <div className="coin-page-component">
        <List  coin={coinData} />
      </div>
      <CoinInfo  heading={coinData.name}  desc={coinData.desc} />
      </>)
      }
    </div>
  );
};

export default CoinPage;
