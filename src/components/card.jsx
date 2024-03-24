import { useEffect, useState, useContext } from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import '/src/styles/card.css'
import { CategoryContext } from '../App'
import { Tooltip } from '@radix-ui/themes';

const Card = (props) => {

    let products = props.products;
    let loadProducts = props.loadProducts;
    const [cartItem, setCartItem] = useState(1);
    const [items, setItems] = useState([]);
    const categoryValue = useContext(CategoryContext);
    const value = categoryValue.value;

    function starStyle(val){
        if(val>=4){
            return(
                {backgroundColor:'lightgreen'}
            )
        }else if(val<2){
            return(
                {backgroundColor:'lightcoral'}
            )
        }else{
            return(
                {backgroundColor:'yellow'}
            )
        }
    }

    function createCard(){
        return items;
    }
    
    useEffect(() => {
        setItems([]);
        for(let i=0; i<products.length; i++){
            if(value===products[i].category||value==="All"){
                setItems(items => [...items,
                    <div className='card-container' key={products[i].title}>
                        <div className='image-container'>
                            <img src={products[i].image} alt={products[i].title}></img>
                        </div>
                        <div className='title-container'>{products[i].title}</div>
                        <div className='rating'>
                            <div className='star' style={starStyle(products[i].rating.rate)}>{products[i].rating.rate} <StarFilledIcon></StarFilledIcon></div>
                            <div className='rating-count'>{products[i].rating.count} ratings</div>
                        </div>
                        <div className='cart-container'>
                            <Tooltip content="Remove from cart">
                            <div className='remove-cart'><img src='src/assets/remove_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                            </Tooltip>
                            <Tooltip content="Quantity">
                            <div className='cart-count'>
                                <input type='number' placeholder='Quantity' defaultValue={cartItem} onChange={e => setCartItem(e.target.value)}></input>
                            </div>
                            </Tooltip>
                            <Tooltip content="Add to cart">
                            <div className='add-cart'><img src='src/assets/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                            </Tooltip>
                        </div>
                    </div>
                ])
            }
    }
    },[loadProducts, value])

    return(
       createCard()
    )
}

export default Card;