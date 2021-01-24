import React from 'react';
import '../scss/main.scss';


export const Projet = ({ name, text, image, url }) => {
    
        return (
            <div className="div_Carousel">
                <div className="div_image">
                <img src={image} alt="presentation du projet" />
                </div>
               <div className="div_text">
               <h2>{name}</h2>
                <p>{text}</p>
                <a href={url}>{url}</a>
               </div>
            </div>
        )
    }




export default Projet;