import { React, useEffect, useState } from "react";
import { Box,Button, Container, Card, CardMedia, CardActions } from "@mui/material";
import List from "../home/list/List";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function Vote() {
  const [dataImg, setDataImg] = useState();

  const dataFilter = dataImg;

  const url = `https://api.thedogapi.com/v1/images/search?limit=1`;
  const apiKey = "8120bc3b-db3b-4675";
  // vrai apiKey à utiliser uniquement le dernier jour = 8120bc3b-db3b-4675-8206-53b4903ae255
  useEffect(() => {
    getMoreDog();
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
  console.log(dataImg);
  return (
    <Container sx={{width:'50%'}}>

      <List dogs={dataFilter}></List>
      <Box sx={{textAlign:'center'}}>
        <Button color='success' variant='contained'  endIcon={<ThumbUpIcon />} value="Get Dogs" onClick={getMoreDog}>
          Love it
        </Button>
        <Button
            color='error'
            variant='contained'
            endIcon={<ThumbDownAltIcon />}
            className="button-dislike"
            value="Get Dogs"
            onClick={getMoreDog}
        >
          Dislike it
        </Button>
      </Box>
    </Container>
  );
}
