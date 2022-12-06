import React from 'react'
import './DashBoard'
import '../../App.css'
import '../Meteo/Forecast'

import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import Forecast from '../Meteo/Forecast';
import Forecast2 from '../Meteo/Forecast2';
import NbaAPI from '../NBA/NbaAPI';
import CryptoAPI from '../Crypto/CryptoAPI';
import CryptoAPI2 from '../Crypto/CryptoAPI2';
import GrapheCrypto from '../Crypto/GrapheCrypto'
import NewsAPI from '../News/NewsAPI';
import VelibAPI from '../Velib/VelibAPI'
import AnnivAPI from '../Annivv/Birth';

function DashBoard() {


    return (
        <div className="App">
            <div className="AppGlass">
                <Sidebar />
                <div className='main'>
                    <Topbar />
                    <div className='widget'>
                    <CryptoAPI />
                    <CryptoAPI2 />
                        
                        <NbaAPI />

                        <Forecast />
                        <Forecast2 />
                       
                        <NewsAPI/>
                       

                        <AnnivAPI/>                        
                    </div>


                </div>

            </div>
        </div>
    );
}

export default DashBoard