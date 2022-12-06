import React, { Component } from "react";
import axios from "axios";
import "./Birth.css"


 var today = new Date();
 const anne = today.getFullYear();
 const mois = today.getMonth()+1;
 const jour = today.getDate()+1;
 const requete = `http://localhost:3001/annivs/${anne}-${mois}-${jour}`;

class AnnivAPID extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
    
  
    componentDidMount() {
      fetch(requete)
        .then(res => res.json())
        .then(
          (result) => {
            
            this.setState({
              isLoaded: true,
              items: result
            });

            console.log("annivs->");
            console.log(this.state.items);
            console.log("annivs->");
        
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
        
      const title = "Anniversaire cette semaine";

      function bonjour()
      {
        return (<p>y aquoi</p> );
      }

    

    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (

           <p className="dm">Demain : {datas.annivs[0].nom}</p>
        );
      }
    }
  }

  export default AnnivAPID;