import { useState, useEffect } from 'react'
import Header from './header';
import Slideshow from './slideshow';
import Category from './category';
import HomeFooter from './homeFooter';
import '/src/styles/home.css'

const Home = (props) => {

    let setMode = props.setMode;
    let mode = props.mode;

    useEffect(() => {
        async function getData(){
            let dat = await fetch('https://fakestoreapi.com/products');
            let response = dat.json();
            console.log(response);
        }

        getData();
    },[])

    return(
        <div className='main-home'>
        <Header setMode={setMode} mode={mode}></Header>
        <Slideshow></Slideshow>
        <Category></Category>
        <HomeFooter></HomeFooter>
        </div>
    )
}

export default Home;