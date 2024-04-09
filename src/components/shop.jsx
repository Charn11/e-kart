import Header from './header'
import '/src/styles/shop.css'
import Dropdown from './dropdown'
import Products from './Products'
import React, { useState, useEffect, useContext } from 'react'
import HomeFooter from './homeFooter';
import Cart from './cart';
import Notification from './notification'
import { ThemeContext } from "../App";

export const NotifyContext = React.createContext();

const Shop = () => {

    const [addNotif, setAddNotif] = useState(false);

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("shop-page").style.backgroundColor = "black"
        }
        if(mode==='light'){
            document.getElementById("shop-page").style.backgroundColor = "white"
        }
    },[mode])

    return(
        <NotifyContext.Provider value={{addNotif, setAddNotif}}>
        <div className='shop-page' id='shop-page'>
            <Header></Header>
            <Dropdown></Dropdown>
            <Products></Products>
            <HomeFooter></HomeFooter>
            <Cart></Cart>
            <Notification></Notification>
        </div>
        </NotifyContext.Provider>
    )
}

export default Shop;