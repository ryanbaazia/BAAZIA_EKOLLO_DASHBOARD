import React from 'react'
import './Topbar.css'
import { ReactDOM } from 'react';


function tick() {
    const element = (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementsByClassName('Date')
    );
  }
  
  setInterval(tick, 1000);

const Topbar = () => {

    var today = new Date();
    const mois = ["Janvier" , "Fevrier" , "Mars" , "Avril" , "Mai" , "Juin" , "Juiller", "Aout" , "Septembre" , "Octobre" , "Novembre", "Decembre"]
    // const oui = 12
    return (
        <div className='Topbar'>

            <div className='Date'>
                Bonjour, aujourd'hui nous sommes le {today.getDate()} {mois[today.getMonth()]} {today.getFullYear()}
            </div>
            <div className='contHoras'>
               <p className='horas'>{today.getHours()}:{today.getMinutes()}</p> 
            </div>
        </div>
    )
}

export default Topbar