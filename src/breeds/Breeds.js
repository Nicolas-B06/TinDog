import { React, useEffect, useState } from "react";
import { FormControl, InputLabel, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import BreedsCard from "./breedsCard/BreedsCard";
export default function Breeds() {
  const [dataBreeds, setDataBreeds] = useState();

useEffect(() => {
    getBreeds();
  }, []);

  const breedsUrl = "https://api.TheDogAPI.com/v1/breeds";
  const apiKey = "8120bc3b-db3b-4675";

  const getBreeds = async () => {
    try {
      const response = await fetch(breedsUrl, {
        method: "GET",
        headers: { "x-api-key": apiKey },
      });
      const data = await response.json();
      setDataBreeds(data);
    } catch (err) {
      console.log(err.stack);
    }
  };
  console.log(dataBreeds);
  function onChange(e) {
    setDataBreeds(e.target.value);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>Breeds</InputLabel>
      <Select onChange={onChange} onBlur={onChange}>
        {dataBreeds &&
          dataBreeds.map((breeds) => { 
            return <MenuItem key={breeds.id} value={breeds.name}>
              {breeds.name}
            </MenuItem>;
          })}
      </Select>
      <BreedsCard breedsValue={dataBreeds}></BreedsCard>
    </FormControl>
  );
}
