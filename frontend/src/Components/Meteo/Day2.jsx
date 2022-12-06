import React, { Component } from "react";
import "./Day.css";
import nuageimg from '../../img/nugae.png'
import Soleilimg from '../../img/soleil.png'
import Wideimg from '../../img/Wind.png'
import Pluieimg from '../../img/Rain.png'
import Bad from '../../img/badtime.png'
class Day2 extends Component {
  render() {
    const { data } = this.props;
    console.log("1");
    console.log("data", data);
    console.log("2");
    if (!data) return null;

    const { dt_txt } = data;
    const { temp } = data.main;
    const { icon, description } = data.weather[0];
    const nuage = data.clouds.all;
    const vent = data.wind.speed;

    const pluie = 38;
    console.log(vent);
    return (
      <div className="day-container2">
        <p className="date" >Demain</p>

        <div className="ImgTemp2">
          <img className="immg2"
            src={Bad}
            alt="weather"
          />
          
          <strong className="temp2">{Math.trunc(temp)}°</strong>
        </div>

       

        

      </div>
    );
  }
}

export default Day2;
