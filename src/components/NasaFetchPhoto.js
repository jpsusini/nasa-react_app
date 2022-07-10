import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from "axios";
/* const apiKey = process.env.REACT_APP_NASA_KEY;
 */
export default function NasaFetchPhoto() {
  const [apod, setapod] = useState([]);
  
  async function getPhotos() {
      try {
        const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=cndPr6X63eAnT8Nrmlfjf78zjr4zfNwjjNMFABmi`
      );
        console.log(res);
        const data = res.data;
        setapod(data);
       
        console.log(data);
        console.log('it works !');
      
      } catch(error) {
        console.log('there is a request error');
      } 
  }
      
  
    useEffect(() => {
        getPhotos()
    }, []);
  
/*       if (!apod) return <div />;
 */  
    return (
      <>
        <div className="apod_wrapper">
          <Navbar />
            <h1 className='title'>{apod.title}</h1>
              <i className='copyright'>{apod.copyright}</i>    
                  <img className='apod_photo'
                    src={apod.url} 
                    alt={apod.title}/>
                    <p className='photo_explanation'>{apod.explanation}</p>
        </div>
      </>
    );
}
