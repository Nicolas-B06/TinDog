import React from 'react';


export default function Card({name, url}) {
    

    return(
        <div className="card" style={{display:"flex",flexDirection:"column"}}>
            <img className='card-img' src={url} alt="dog img" style={{width:"200px"}}/>   
            <span className='card-number'>{name? name.name : "Je souhaite rester anonyme"}</span>
        </div>
    )
}