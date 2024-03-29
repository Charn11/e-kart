import Header from './header'
import '/src/styles/shop.css'
import Dropdown from './dropdown'
import Products from './Products'
import React from 'react'
import HomeFooter from './homeFooter';
import Cart from './cart';

const Shop = () => {

    return(
        <div className='shop-page'>
            <Header></Header>
            <Dropdown></Dropdown>
            <Products></Products>
            <HomeFooter></HomeFooter>
            <Cart></Cart>
        </div>
    )
}

export default Shop;