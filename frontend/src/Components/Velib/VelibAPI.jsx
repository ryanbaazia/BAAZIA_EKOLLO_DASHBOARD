import React, { Component } from "react";
import axios from "axios";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: null
    };
  }

  callAPI = city => {
    // Call API
    axios
      .get(`https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json`)
      .then(({ data }) => {
        console.log(data);
        // Recupere uniquement la propriété data
      
        // On prend les trois premières heures de chaque jour (donc de 0-3h))
      
      })
      .catch(console.error);
  };

  // Lance un appel au lancement du component
  componentDidMount() {
    const { city } = this.props;
    this.callAPI(city);
  }

  // A chaque update relance une api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.city !== this.props.city) {
      this.callAPI(nextProps.city);
    }
  }

  render() {
    const { forecast } = this.state;
    const { city } = this.props;
    if (!forecast) return <p>Loading...</p>;
    return (
       <p>Velib</p>
    );
  }
}

export default Forecast;