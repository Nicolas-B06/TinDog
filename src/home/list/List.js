import React from 'react';
import Card  from './card/Card';

export default function List({dogs}) {
 
    return(
        <>
        <div className='list-container' style={{width:"55%", display:"flex",flexWrap:"wrap", gap:"15px", marginLeft:"auto",marginRight:"auto"}}>
            {dogs && dogs.map((dog)=>{return <Card key={dog.id} name={dog.breeds[0]? dog.breeds[0]:null} url={dog.url}></Card>})}
            {/* {dogs && <img src={dogs.url} alt="dog img" style={{width:"500px"}}/>} */}
        </div>
        </>
    )
}