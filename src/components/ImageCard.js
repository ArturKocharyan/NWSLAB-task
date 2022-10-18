import React from "react";
import './card.css'
function ImageCard({item}){

    console.log(item);
    return(
        <div className="cardStyle" >
        <img src={item} alt="cat" style={{
            width:'100%',
            height:'100%'
        }}/>
        </div>
    )
}

export default ImageCard