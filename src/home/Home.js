import React from 'react';
import './home.css';
import Header from '../comons/header/Header';
import List from'../home/list/List' ;
import data from '../data/pokemons.json';
import Search from '../home/search/Search'
import Footer from '../comons/footer/Footer';

export default function Home() {

    const [query, setQuery] = React.useState("")

    // const dataFilter = data.filter((dogs)=>{
    //     if ( dogs.names.fr.toLowerCase().includes(query.toLowerCase())){
    //         return true
    //     } else { return false}
    // }

    // )

    return(
        <>
            <Header/>
            <Search query={query} setQuery={setQuery}></Search>
            <List ></List>
            <Footer/>
        </>
    )
}
    