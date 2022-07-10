import React from "react";

const PhotoCard = (props) => {
    
    return(
        <>
            <h1>Mars Photos</h1>
                <img
                key={props.id}
                src={props.img_src} 
                alt={props.title}
                />
        </>
    )
}

export default PhotoCard;