import {React, useEffect, useState} from 'react';
import Header from '../comons/header/Header';
import List from'../home/list/List' ;
import Search from '../home/search/Search'
import Footer from '../comons/footer/Footer';

export default function Home() {

    const [query, setQuery] = useState("");
    const [ data, setData]= useState();

    useEffect(()=> {
        fetch("https://api.thedogapi.com/v1/images/search")
        .then(response =>{
            console.log(response,'response');
          return response.json();
        })
        .then(data =>{
            console.log(data);
          setData(data[0].url)
          
        })

    }, []);

    const dataFilter = data;
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
    