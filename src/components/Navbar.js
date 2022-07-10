import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className='nav_bar'>
            <ul>
                <Link className="link" to="/" exact >Home</Link>
                <Link to="/NasaFetchPhoto" >Apod</Link>
                <Link to="/NasaFetchMarsPhoto" >Mars</Link>
                <img className="navbar_img" src="jupiter_planet.svg" alt="planete1" width={50} height={50}></img>
            </ul>
        </div>
    )
}
