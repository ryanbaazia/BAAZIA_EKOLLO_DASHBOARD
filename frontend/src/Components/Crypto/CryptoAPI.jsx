import React, { Component } from "react";
import axios from "axios";
import '@progress/kendo-theme-default/dist/all.css';
import GrapheCrypto from "./GrapheCrypto"
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
} from "@progress/kendo-react-charts";


class CryptoAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true")
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            isLoaded: true,
            items: result
          });

          console.log("Crypto");
          console.log(this.state.items);
         
        },
       

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {
    const { error, isLoaded, items } = this.state;
    const datas = this.state.items;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {


      return (


        <div className="widget3">

          <img src={datas.image.small} alt="illustration" className="ImgCrypto" />
          <div className="InfoCry">
            <p className="nameCry">{datas.name}</p>
            <p className="symbCry">{datas.symbol}</p>
          </div>
          <div className="Prix">
              <p className="currentPrice">{datas.market_data.current_price.eur}€</p>
              <p className="change">+{Math.trunc(datas.market_data.price_change_percentage_7d_in_currency.eur)}%</p>
            </div>
          <GrapheCrypto />

        </div>




      );
    }
  }
}

export default CryptoAPI;