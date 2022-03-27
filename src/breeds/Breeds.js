import {useEffect, useState } from "react";
import {Button, FormControl, InputLabel, Select} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import BreedsCard from "./breedsCard/BreedsCard";

export default function Breeds() {

  const [data, setData] = useState(); 
  const [breedsValue, setBreedsValue] = useState("Affenpinscher");

  useEffect(()=> { 
    getData();
  }, []);

  const url='https://api.thedogapi.com/v1/breeds';    
  const apiKey='8120bc3b-db3b-4675-8206-53b4903ae255';
  
  console.log(data, "data");

  const getData = async()=> {
    try { 
      const response = await fetch(url, {
        method: 'GET',
        headers: {'x-api-key': apiKey}
      });
      const dataFetched = await response.json();
      setData(dataFetched);
    } catch(err){
      console.log(err.stack);
    }
  };
  function onChange(e) {
    setBreedsValue(e.target.value);
  }
 
  return (
    <>
      <div className="filter-container">
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Select a breed</InputLabel>
            <Select
                value= {breedsValue}
                onChange={onChange}
                onBlur={onChange}
            >
               {data && data.map((breed)=> {  
              return <MenuItem key={breed.id} value={breed.name}>{breed.name}</MenuItem>
            })}
            </Select>
          </FormControl>
      </div>
      <BreedsCard data={data} breedsValue={breedsValue}/>
  </>
  )
}
