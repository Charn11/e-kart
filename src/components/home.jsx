import { useState, useEffect } from 'react'
import Header from './header';
import Slideshow from './slideshow';

const Home = () => {

    useEffect(() => {
        async function getData(){
            let dat = await fetch('https://fakestoreapi.com/products');
            let response = dat.json();
            console.log(response);
        }

        getData();
    })

    return(
        <>
        <Header></Header>
        <Slideshow></Slideshow>
        </>
    )
}

export default Home;