import {React, useEffect, useState} from 'react';
import {Button, Container, Card, CardMedia, CardActions} from '@mui/material';
import List from "../home/list/List";


export default function Vote() {

    const [ dataImg, setDataImg]= useState();
    
    const dataFilter = dataImg;
    
    const url =`https://api.thedogapi.com/v1/images/search?limit=1`;
    const apiKey ="8120bc3b-db3b-4675"
// vrai apiKey à utiliser uniquement le dernier jour = 8120bc3b-db3b-4675-8206-53b4903ae255
    useEffect(()=> {
        getMoreDog();
    }, []);

    const getMoreDog = async()=> {
        try {
            const response = await fetch( url, {
                                    method:"GET",
                                    headers:{"x-api-key" : apiKey}
                                })
            const data = await response.json();                          
            setDataImg(data) 
        } catch(err){
            console.log(err.stack)
        }
    };
 console.log(dataImg)
    return(
        <>
                <Container maxWidth="x1">
                    <Card >
                        <CardMedia height="100">
                            <List dogs={dataFilter}></List>
                        </CardMedia>
                        <CardActions>
                            <Button className="button-like" value="Get Dogs" onClick={getMoreDog}>Love it</Button>
                            <Button className="button-dislike" value="Get Dogs" onClick={getMoreDog}>Dislike it</Button>
                        </CardActions>
                    </Card>
                </Container>
        </>
    )
}