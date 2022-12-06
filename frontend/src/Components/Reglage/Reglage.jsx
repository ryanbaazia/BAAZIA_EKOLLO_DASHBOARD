import React from 'react'
import './Reglage'
import '../../App.css'
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import "../DashBoard/DashBoard.css"


const Reglage = () => {

    //yes
    return (

        <div className="App">
            <div className="AppGlass">
                <Sidebar />


                <div className='main'>
                    <Topbar />
                    <div className='widget'>
                    <form>
                        <label>
                            Ajouter un individu
                        <br></br><br></br><br></br><br></br>
                            Nom :
                            <input type="text" name="name" /><br></br><br></br>
                            Date de naissance :
                            <input type="text" name="date" />
                        </label>
                        <br></br><br></br>
                        <input type="submit" value="Envoyer" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
       

    )
}

export default Reglage