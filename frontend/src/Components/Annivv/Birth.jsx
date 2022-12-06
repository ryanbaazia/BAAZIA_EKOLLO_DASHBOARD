import React, { Component } from "react";
import axios from "axios";
import "./Birth.css"
import AnnivAPID from "./BirthDemain";


 var today = new Date();
 const anne = today.getFullYear();
 const mois = today.getMonth()+1;
 const jour = today.getDate();
 const requete = `http://localhost:3001/annivs/${anne}-${mois}-${jour}`;

class AnnivAPI extends React.Component {
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

           <div className="widget5">
          
               
               <p className="titre"> {title}</p> 

            <div className="cont">
                <div className="today">
                    <p className="A">Aujourd'hui</p>
                    <p className="auj"> {datas.annivs[0].nom} </p>
                  


                </div>
                <div className="After">
                  <p className="A">Plus tard</p>
                     <AnnivAPID/>
                    
                 </div>
            </div>

          
          </div>
        );
      }
    }
  }

  export default AnnivAPI;