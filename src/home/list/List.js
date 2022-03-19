import React from 'react';
import Card from './card/Card';

export default function List({dogs}) {
    console.log(dogs);

    return(
        <>
        <div className='list-container'>
            {/* {dogs.map((dog)=>{return <Card key={dog.id} name={dog}></Card>})} */}
            {dogs && <img src={dogs} alt="dog img" style={{width:"250px"}}/>}
        </div>
        </>
    )
}