import { useEffect, useState, useContext } from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import '/src/styles/card.css'
import { CategoryContext, GridContext, ItemContext, CartContext } from '../App'
import { NotifyContext } from './shop'
import { Tooltip } from '@radix-ui/themes';

let topElm, cartTitle, cartPrice, cartQuantity;

const Card = (props) => {

    let products = props.products;
    let loadProducts = props.loadProducts;
    const [cartItem, setCartItem] = useState(1);
    const [items, setItems] = useState([]);
    const [updateFlag, setFlag] = useState(false)
    const categoryValue = useContext(CategoryContext);
    const grid = useContext(GridContext)
    const cartValues = useContext(ItemContext);
    const cartProducts = cartValues.cartProducts;
    const setCartProducts = cartValues.setCartProducts;
    const value = categoryValue.value;
    const setUpdate = grid.setUpdate;

    const cart = useContext(CartContext);
    const setDispCart = cart.setDispCart;

    const notify = useContext(NotifyContext);
    const addNotif = notify.addNotif;
    const setAddNotif = notify.setAddNotif;

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

    function handleDelete(){
        setDispCart(true);
    }

    function handleAdd(e){
        topElm = e.target.parentNode.parentNode.parentNode;
        cartTitle = topElm.children[1].innerText;
        cartPrice = Number(topElm.children[2].children[0].innerText.slice(1));
        cartQuantity = Number(topElm.children[3].children[1].children[0].value);
        setFlag(true);
        setAddNotif(true);
    }

    useEffect(() => {
        let index;
        let added = false;
        if(updateFlag){
            for(let i=0; i<cartProducts.length; i++){
                if(cartProducts[i].title===cartTitle){
                    index = i;
                    added = true;
                    break;
                }
            }
            if(added){
                setCartProducts(cartProducts.map((item, j) => {
                    if(index===j){
                        return {...item, price: Math.round((item.price+(cartPrice*cartQuantity) + Number.EPSILON) * 100) / 100, 
                        quantity: Math.round((item.quantity+cartQuantity + Number.EPSILON) * 100) / 100}
                    }else{
                        return item;
                    }
                }))
            }
            if(!added){
                setCartProducts(prev => [...prev, {title: cartTitle, 
                    price: Math.round((cartPrice*cartQuantity + Number.EPSILON) * 100) / 100, 
                    quantity: Math.round((cartQuantity + Number.EPSILON) * 100) / 100, 
                    originalPrice: cartPrice}])
            }
            setFlag(false)
        }
    },[updateFlag])
    
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
                            <p className='price'>${products[i].price}</p>
                            <div className='star' style={starStyle(products[i].rating.rate)}>{products[i].rating.rate}<StarFilledIcon></StarFilledIcon> {products[i].rating.count} ratings</div>
                        </div>
                        <div className='cart-container'>
                            <Tooltip content="Remove from cart">
                            <div className='remove-cart'><img onClick={handleDelete} src='src/assets/remove_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                            </Tooltip>
                            <Tooltip content="Quantity">
                            <div className='cart-count'>
                                <input type='number' placeholder='Quantity' defaultValue={cartItem} onChange={e => setCartItem(e.target.value)}></input>
                            </div>
                            </Tooltip>
                            <Tooltip content="Add to cart">
                            <div className='add-cart'><img onClick={e => handleAdd(e)} src='src/assets/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                            </Tooltip>
                        </div>
                    </div>
                ])
            }
        }
        setUpdate(true);
    },[loadProducts, value])

    return(
       createCard()
    )
}

export default Card;