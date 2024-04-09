import { useEffect, useState, useContext } from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import '/src/styles/card.css'
import { CategoryContext, GridContext, ItemContext, CartContext, ThemeContext } from '../App'
import { NotifyContext } from './shop'

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
    const setAddNotif = notify.setAddNotif;
    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //for changing theme
    useEffect(() => {
        if(mode==='dark'){
            let imgfilt = document.querySelectorAll(".imgfilter");
            imgfilt.forEach(element => {
                element.style.backgroundColor = "white"
            })
            let ratinffilt = document.querySelectorAll(".rating");
            ratinffilt.forEach(element => {
                element.style.color = "black"
                element.firstChild.style.color = "white"
            })
            let remcart = document.querySelectorAll(".remove-cart")
            remcart.forEach(element => {
                element.style.filter = "invert(1)"
            })
            let addcart = document.querySelectorAll(".add-cart")
            addcart.forEach(element => {
                element.style.filter = "invert(1)"
            })
        }
        if(mode==='light'){
            let imgfilt = document.querySelectorAll(".imgfilter");
            imgfilt.forEach(element => {
                element.style.backgroundColor = "white"
            })
            let ratinffilt = document.querySelectorAll(".rating");
            ratinffilt.forEach(element => {
                element.style.color = "black"
                element.firstChild.style.color = "black"
            })
            let remcart = document.querySelectorAll(".remove-cart")
            remcart.forEach(element => {
                element.style.filter = "invert(0)"
            })
            let addcart = document.querySelectorAll(".add-cart")
            addcart.forEach(element => {
                element.style.filter = "invert(0)"
            })
        }
    },)

    //sets rating color
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

    //getting input value from when user clicks on add to cart
    function handleAdd(e){
        topElm = e.target.parentNode.parentNode.parentNode;
        cartTitle = topElm.children[1].innerText;
        cartPrice = Number(topElm.children[2].children[0].innerText.slice(1));
        cartQuantity = Number(topElm.children[3].children[1].children[0].value);
        setFlag(true);
        setAddNotif(true);
    }

    //for checking if product is  in cart and increment if it is already in cart array
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
    
    //display product cards
    useEffect(() => {
        setItems([]);
        for(let i=0; i<products.length; i++){
            if(value===products[i].category||value==="All"){
                setItems(items => [...items,
                    <div className='card-container' key={products[i].title}>
                        <div className='image-container'>
                            <img className='imgfilter' src={products[i].image} alt={products[i].title}></img>
                        </div>
                        <div className='title-container'>{products[i].title}</div>
                        <div className='rating'>
                            <p className='price'>${products[i].price}</p>
                            <div className='star' style={starStyle(products[i].rating.rate)}>{products[i].rating.rate}<StarFilledIcon></StarFilledIcon> {products[i].rating.count} ratings</div>
                        </div>
                        <div className='cart-container'>
                            <div className='remove-cart'><img title='Remove from cart'  onClick={handleDelete} src='src/assets/remove_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                            <div className='cart-count'>
                                <input type='number' title='Quantity' placeholder='Quantity' defaultValue={cartItem} onChange={e => setCartItem(e.target.value)}></input>
                            </div>
                            <div className='add-cart'><img title='Add to cart' onClick={e => handleAdd(e)} src='src/assets/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
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