import React from 'react';


export default function Card({name}) {

    const type = name.types.map((type)=>{return type})

    return(
        <div className="card">
            <span className='card-number'>N°{name.id}</span>
            <h1 className='card-title'>{name.names['fr']}</h1>
            <img className='card-img' src={name.image} alt=""/>
            <div className='type'>
            {name.types.map((type)=>{return <div key={type} className={"type-"+ type}>{type}</div>})}
            </div>
        </div>
    )
}