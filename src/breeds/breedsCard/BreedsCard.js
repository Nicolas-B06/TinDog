import React from 'react'

export default function BreedsCard({data ,breedsValue}) {

  
    const filterData = function (datas){
        const dataFetch =  datas.filter(item => {
           return item.name.toLowerCase().includes(breedsValue.toLowerCase());
        });
        return dataFetch;
    };
    
  const breed =  filterData(data);

    console.log(breed,'filterBreeds');

    return (
      <h1>{breed.name}</h1>

    )
}
