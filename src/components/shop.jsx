import Header from './header'
import '/src/styles/shop.css'
import Dropdown from './dropdown'
import Products from './Products'
import React, { useState } from 'react'
import HomeFooter from './homeFooter';
import Cart from './cart';
import Notification from './notification'

export const NotifyContext = React.createContext();

const Shop = () => {

    const [addNotif, setAddNotif] = useState(false);

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