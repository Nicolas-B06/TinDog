import {React, useEffect, useState} from 'react';
import Header                       from '../comons/header/Header';
import List                         from '../home/list/List';
import Footer                       from '../comons/footer/Footer';
import { Button, Container }                   from '@mui/material';


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

    return(
        <>
            <Header/>
                <Container maxWidth="x1">
                    <List dogs={dataFilter}></List>
                    <Container maxWidth="xl"> 
                    <Button className="button-like" value="Get Dogs" onClick={getMoreDog}>Love it</Button> 
                    <Button className="button-dislike" value="Get Dogs" onClick={getMoreDog}>Dislike it</Button>
                    </Container>
                </Container>
            <Footer/>
        </>
    )
}