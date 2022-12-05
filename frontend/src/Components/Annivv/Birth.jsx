import React, { Component } from "react";
import axios from "axios";
import "./Birth.css"


 var today = new Date();
 const anne = today.getFullYear();
 const mois = today.getMonth()+1;
 const jour = today.getDate()-1;
 const requete = "http://localhost:3001/annivs";

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
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.

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
                    <p> {datas.annivs[0].date[0]+1} </p>


                </div>
                <div className="After">
                  <p className="A">Plus tard</p>
                  <p> Tibo 18 ans</p>
                  <p> Tibo 20 ans</p>
                  <p> Tibo 34 ans</p>
                    
                 </div>
            </div>

          
          </div>
        );
      }
    }
  }

  export default AnnivAPI;