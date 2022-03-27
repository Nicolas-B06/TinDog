import {React, useEffect, useState} from 'react'
import Header                       from '../comons/header/Header';
import List                         from '../home/list/List';
import Footer                       from '../comons/footer/Footer';


export default function Breeds() {

  //function to get the data from the API
  const [data, setData] = useState(); 
  const [url, setUrl] = useState('https://api.thedogapi.com/v1/breeds');    
  const [apiKey, setApiKey] = useState('8120bc3b-db3b-4675-8206-53b4903ae255');

  useEffect(()=> {
    getData();
  }, []);

  const getData = async()=> {
    try { 
      const response = await fetch(url, {
        method: 'GET',
        headers: {'x-api-key': apiKey}
      });
      const data = await response.json();
      setData(data);
    } catch(err){
      console.log(err.stack);
    }
  };
//function to fetch the first array of data

  console.log(data, 'data');

  return (
    <>
      <Header/>
      <div className="filter-container">
        <form className="select-form">
          <select className="select-breed">
            <option value="">Select a breed</option>
            {data && data.map((breed)=> {  //if data is not empty
              return <option key={breed.id} value={breed.name}>{breed}</option>
            })}
          </select>
        </form>
      </div>
    <div>Breeds</div>
  </>
  )
}
