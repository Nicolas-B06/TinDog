import React from 'react';
import Card from './card/Card';

export default function List({dogs}) {
 
    console.log(dogs,"dogid");

    return(
        <>
        <div className='list-container' style={{width:"75%", display:"flex",flexWrap:"wrap"}}>
            {dogs && dogs.map((dog)=>{return <Card key={dog.id} name={dog.breeds[0]? dog.breeds[0]:null} url={dog.url}></Card>})}
            {/* {dogs && <img src={dogs.url} alt="dog img" style={{width:"500px"}}/>} */}
        </div>
        </>
    )
}