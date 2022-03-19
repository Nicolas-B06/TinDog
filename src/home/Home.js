import {React, useEffect, useState} from 'react';
import Header from '../comons/header/Header';
import List from'../home/list/List' ;
import Search from '../home/search/Search'
import Footer from '../comons/footer/Footer';

export default function Home() {

    const [query, setQuery] = useState("");
    const [ dataImg, setDataImg]= useState();

    const url ="https://api.thedogapi.com/v1/images/search?limit=20";

    useEffect(()=> {
        const fetchData = async()=> {
            try {
                const response = await fetch( url, {
                                        method:"GET",
                                        headers:{"x-api-key" : "8120bc3b-db3b-4675-8206-53b4903ae255"}
                                    })
                const data = await response.json();                          
                setDataImg(data) 
            } catch(err){
                console.log(err.stack)
            }
        }   
        (async ()=> await fetchData())();
    }, []);

    const dataFilter = dataImg;
    console.log(dataFilter,"datafilter");
    //.filter((dogs)=>{
    //     if ( dogs.names.toLowerCase().includes(query.toLowerCase())){
    //         return true
    //     } else { return false}
    // });

    return(
        <>
            {/* <Header/> */}
            {/* <Search query={query} setQuery={setQuery}></Search> */}
            <List dogs={dataFilter}></List>
            {/* <Footer/> */}
        </>
    )
}
    