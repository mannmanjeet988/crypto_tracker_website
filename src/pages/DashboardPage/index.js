import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Header from "../../components/Common/Header";
import TabsComponent from "../../components/Dashboard/TabsComponent";
import { LineAxisOutlined } from "@mui/icons-material";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response);
        setCoins(response.data);
      })
      .catch((error) => console.log("ERROR>>>", error));
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
};

export default DashboardPage;
