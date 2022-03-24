import {useEffect, useState } from "react";
import {Button, FormControl, InputLabel, Select} from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import List from "./list/List";


export default function Home() {
 // const [query, setQuery] = useState("");
  const [dataImg, setDataImg] = useState();
  const [nbImg, setNbImg] = useState("9");
  const [dataCategories, setDatacategories] = useState();

  const dataFilter = dataImg;

  const url = `https://api.thedogapi.com/v1/images/search?limit=${nbImg}`;
  const urlCat = "https://api.thedogapi.com/v1/categories";
  const apiKey = "8120bc3b-db3b-4675";
  // vrai apiKey à utiliser uniquement le dernier jour = 8120bc3b-db3b-4675-8206-53b4903ae255
  useEffect(() => {
    getMoreDog();
    getCategories();
  }, []);

  const getMoreDog = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { "x-api-key": apiKey },
      });
      const data = await response.json();
      setDataImg(data);
    } catch (err) {
      console.log(err.stack);
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch(urlCat, {
        method: "GET",
        headers: { "x-api-key": apiKey },
      });
      const data = await response.json();
      setDatacategories(data);
    } catch (err) {
      console.log(err.stack);
    }
  };

  function onChange(e) {
    setNbImg(e.target.value);
  }

  return (
      <div>
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            Search by
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Type</InputLabel>
            <Select
                value="Type"
                label="Type"
                onChange={onChange}
                onBlur={onChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>All</em>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Category</InputLabel>
            <Select
                value="Type"
                label="Category"
                onChange={onChange}
                onBlur={onChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
            >
              {dataCategories &&
                  dataCategories.map((categories) => {
                    <MenuItem key={categories.id} value={categories.name}>
                      {categories.name}
                    </MenuItem>;
                  })}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Breeds</InputLabel>
            <Select
                value="Order"
                label="Order"
                onChange={onChange}
                onBlur={onChange}

                inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="none">None</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Order</InputLabel>
            <Select
                value="Order"
                label="Order"
                onChange={onChange}
                onBlur={onChange}

                inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="random">Random</MenuItem>
              <MenuItem value="asc">Asc</MenuItem>
              <MenuItem value="desc">Desc</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>How many dogs you want ?</InputLabel>
            <Select
                value= {nbImg}
                onChange={onChange}
                onBlur={onChange}
            >
              <MenuItem value='3'>3</MenuItem>
              <MenuItem value='6'>6</MenuItem>
              <MenuItem value='9'>9</MenuItem>
              <MenuItem value='12'>12</MenuItem>
            </Select>
          </FormControl>
          <Button  type="button" variant="contained" value="Get Dogs" onClick={getMoreDog}>More</Button>
        </Box>

        <List dogs={dataFilter}></List>

      </div>


  )
}
