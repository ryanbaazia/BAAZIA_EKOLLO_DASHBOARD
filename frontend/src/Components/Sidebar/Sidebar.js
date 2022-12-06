import React from 'react'
import './Sidebar.css'
import {NavLink} from "react-router-dom";

const Sidebar = () => {



    return (
        <div className='Sidebar'>

            <div className='Logo'>
                <span>
                    DALY <span>PAPER.</span>
                </span>
            </div>

            <div className='NavBar'>
                <ul className=''>
                    <NavLink to="/" >
                        <p>DASHBOARD</p>
                    </NavLink>
                    <NavLink to="/reglage" >
                       <p>REGLAGE</p>
                    </NavLink>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar