import { React, useEffect, useState } from 'react';
import Header                         from '../comons/header/Header';
import List                           from '../home/list/List' ;
import Search                         from '../home/search/Search';
import Footer                         from '../comons/footer/Footer';

export default function Home() {

    const [query, setQuery]                   = useState('');
    const [ dataImg, setDataImg]              = useState();
    const [nbImg, setNbImg]                   = useState('9');
    const [dataCategories, setDatacategories] =  useState();

    const dataFilter = dataImg;
    
    const url    = `https://api.thedogapi.com/v1/images/search?limit=${nbImg}`;
    const urlCat = 'https://api.thedogapi.com/v1/categories';
    const apiKey ='8120bc3b-db3b-4675';
    // vrai apiKey à utiliser uniquement le dernier jour = 8120bc3b-db3b-4675-8206-53b4903ae255
    useEffect(()=> {
        getMoreDog();
        getCategories();
    }, []);

    const getMoreDog = async()=> {
        try {
            const response = await fetch( url, {
                method : 'GET',
                headers: { 'x-api-key': apiKey }
            });
            const data     = await response.json();                          
            setDataImg(data); 
        } catch(err){
            console.log(err.stack);
        }
    }; 

    const getCategories = async()=> {
        try {
            const response = await fetch( urlCat, {
                method : 'GET',
                headers: { 'x-api-key': apiKey }
            });
            const data     = await response.json();                          
            setDatacategories(data); 
        } catch(err){
            console.log(err.stack);
        }
    }; 
    
    function onChange(e){
        setNbImg(e.target.value);
    }

    return(
        <>
            <Header/>
            <div className="filter-container">
                <form className="select-form">
                    <h1 className=''>Search by</h1>
                    <label  className="select-form-label">
                        <p>Type</p> 
                        <select className="select-form-nb-image" value="" onChange={onChange}  onBlur={onChange}>
                            <option value="all">All</option>
                        </select>
                    </label>
                </form>
                <form className="select-form">
                    <label  className="select-form-label">
                        <p>Category</p> 
                        <select className="select-form-nb-image" value="" onChange={onChange}  onBlur={onChange}>
                            {dataCategories && dataCategories.map((categories) => {<option key={categories.id} value={categories.name}>{categories.name}</option>;} )}
                        </select>
                    </label>
                </form>
                <form className="select-form">
                    <label  className="select-form-label">
                        <p>Breed</p> 
                        <select className="select-form-nb-image" value="" onChange={onChange}  onBlur={onChange}>
                            <option value="none">None</option>
                        </select>
                    </label>
                </form>
                <form className="select-form">
                    <label  className="select-form-label">
                        <p>Order</p>  
                        <select className="select-form-nb-image" value="" onChange={onChange}  onBlur={onChange}>
                            <option value="random">Random</option>
                            <option value="asc">Asc</option>
                            <option value="desc">Desc</option>
                        </select>
                    </label>
                </form>
            </div>
            <List dogs={dataFilter}></List>
            <form className="select-form">
                <label  className="select-form-label">
                    <p>How many dogs you want ?</p> 
                    <select className="select-form-nb-image" value={nbImg} onChange={onChange}  onBlur={onChange}>
                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                </label>
            </form>
            <input className="reload-button" type="button" value="Get Dogs" onClick={getMoreDog} />
            <Footer/>
        </>
    );
}
    