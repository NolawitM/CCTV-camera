import React from "react";



export default function Services(props){
    return(
       

    

        <div className="services">
            
            <img src={`../images/${props.items.img}`} className="card-img" />
            
            <div className="service-description">
                
                <p>{props.items.name}</p>
                <p>{props.items.date}</p>
                <p>{props.items.description}</p>

             </div>
             
        </div>

    )
}