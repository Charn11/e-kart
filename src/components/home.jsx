import { useState, useEffect } from 'react'
import Header from './header';
import Slideshow from './slideshow';
import Category from './category';
import '/src/styles/home.css'

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
        <div className='main-home'>
        <Header></Header>
        <Slideshow></Slideshow>
        <Category></Category>
        </div>
    )
}

export default Home;