import Header from './header'
import '/src/styles/shop.css'
import Dropdown from './dropdown'
import Products from './Products'

const Shop = () => {

    return(
        <div className='shop-page'>
            <Header></Header>
            <Dropdown></Dropdown>
            <Products></Products>
        </div>
    )
}

export default Shop;