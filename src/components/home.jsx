import Header from './header';
import Slideshow from './slideshow';
import Category from './category';
import HomeFooter from './homeFooter';
import Cart from './cart';
import '/src/styles/home.css'
import { ThemeContext } from "../App";
import React, { useEffect, useContext } from 'react'

const Home = () => {

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("main-home").style.backgroundColor = "black"
        }
        if(mode==='light'){
            document.getElementById("main-home").style.backgroundColor = "white"
        }
    },[mode])

    return(
        <div className='main-home' id='main-home'>
            <Header ></Header>
            <Slideshow></Slideshow>
            <Category></Category>
            <HomeFooter></HomeFooter>
            <Cart></Cart>
        </div>
    )
}

export default Home;