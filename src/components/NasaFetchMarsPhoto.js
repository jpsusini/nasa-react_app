import React,{ useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Navbar';

/* const apiKey = process.env.REACT_APP_NASA_KEY;
 */
export default function NasaFetchMarsPhoto() {
    const [marsRover, setMarsRover] = useState([]);
    
    async function MarsPhoto() {
        try {
            const res = await axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&sol=188&page=2&api_key=cndPr6X63eAnT8Nrmlfjf78zjr4zfNwjjNMFABmi`
            );
            console.log(res)
            
            const data = res.data;
/*                 console.log(data);
 */            
            const fetchPhotos = data.photos.slice(0,25)
            setMarsRover(fetchPhotos.map(items => {
                console.log(items);
                return items.img_src
            }));
            }catch(error) {
            console.log('request error !');
            }
    }

    useEffect(() => {
        MarsPhoto()
    },[]);
     
    
    return(
        <div>
            <Navbar />
                <ol className="mars_wrapper">
                    {marsRover.map((url) => {
                        return (
                                <img class="mars_photo"  width={450} height={350}
                                src={url} 
                                alt="mars_pictures" />
                        )
                    })}
                </ol>
        </div>
    )
}