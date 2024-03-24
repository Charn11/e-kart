import Header from './header'
import '/src/styles/shop.css'
import Dropdown from './dropdown'
import Products from './Products'
import React from 'react'
import HomeFooter from './homeFooter';

const Shop = () => {

    return(
        <div className='shop-page'>
            <Header></Header>
            <Dropdown></Dropdown>
            <Products></Products>
            <HomeFooter></HomeFooter>
        </div>
    )
}

export default Shop;