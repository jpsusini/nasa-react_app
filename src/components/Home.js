import React from "react";
import { Link } from "react-router-dom"; 

export default function Home() {

  return (
      <div className="home_container">
          <Link className="home_link" to="/NasaFetchPhoto" >TO MARS TO EXPLORE</Link>
          <img className="home_img" src="astronaut.svg" alt="planete1" width={250} height={250}></img>
{/*           <img className="home_img_2" src="planet3.svg" alt="planete1" width={150} height={150}></img>
 */}      </div>
  );
}

