import '/src/styles/cart.css'
import React, { useEffect, useContext, useState, useMemo } from "react";
import { CartContext, ItemContext } from "../App";
import { Table } from '@radix-ui/themes';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import { Theme } from '@radix-ui/themes';

let title, quantity, price, originalPrice;

const Cart = () => {

    const cart = useContext(CartContext);
    const dispCart = cart.dispCart;
    const setDispCart = cart.setDispCart;
    const cartValues = useContext(ItemContext);
    const cartProducts = cartValues.cartProducts;
    const setCartProducts = cartValues.setCartProducts;
    const [cartItems, setCartitems] = useState([]);
    const [updatePlus, setPlus] = useState(false);
    const [updateMinus, setMinus] = useState(false);

    const [total, setTotal] = useState(0);

    function handleClose(){
        setDispCart(false);
    }

    function addItems(){
        return cartItems;
    }

    //when click on remove button
    function handleRemove(rem){
        setCartProducts(cartProducts.filter(a => a.title !== rem));
    }

    //when click on plus sign
    function handlePlus(t, q, p, o){
        title = t;
        quantity = q;
        price = p;
        originalPrice = o;
        setPlus(true);
    }

    //when click on minus sign
    function handleDel(t, q, p, o){
        title = t;
        quantity = q;
        price = p;
        originalPrice = o;
        setMinus(true);
    }

    const totalPrice = useMemo(() => {
        return cartProducts.reduce(
          (total, product) => Math.round((total + product.price + Number.EPSILON) * 100) / 100,
          0
        );
      }, [cartProducts]);

    //adds or removes from cart array
    useEffect(() => {
        let index;
        let added = false;
        for(let i=0; i<cartProducts.length; i++){
            if(cartProducts[i].title===title){
                index = i;
                added = true;
                break;
            }
        }
        if(updatePlus){
            if(added){
                setCartProducts(cartProducts.map((item, j) => {
                    if(index===j){
                        return {...item, price: Math.round((item.price+(originalPrice*quantity) + Number.EPSILON) * 100) / 100, 
                        quantity: Math.round((item.quantity+quantity + Number.EPSILON) * 100) / 100}
                    }else{
                        return item;
                    }
                }))
            }
            setPlus(false)
        }

        if(updateMinus){
            if(added){
                setCartProducts(cartProducts.map((item, j) => {
                    if(index===j){
                        return {...item, price: Math.round((item.price-(originalPrice*quantity) + Number.EPSILON) * 100) / 100, 
                        quantity: Math.round((item.quantity-quantity + Number.EPSILON) * 100) / 100}
                    }else{
                        return item;
                    }
                }))
            }
            if(cartProducts[index].quantity===0){
                handleRemove(title)
            }
            setMinus(false);
        }
    },[updatePlus, updateMinus])

    //when user clicks minus and item count becomes zero it removes from cart
    useEffect(() => {
        for(let i=0; i<cartProducts.length; i++){
            if(cartProducts[i].quantity===0){
                handleRemove(cartProducts[i].title)
            }
        }
    },[cartProducts])

    //styles cart popup when user clicks cart icon
    useEffect(() => {
        if(dispCart===true){
            document.getElementById("cart").style.display = "block";
            let pTags = document.querySelectorAll(".main-home, .shop-page");
            let blurTags = pTags[0].childNodes;
            for(let i=0; i< blurTags.length; i++){
                if(blurTags[i].id!=="cart"){
                    blurTags[i].style.filter = "blur(25px)"
                    blurTags[i].style.pointerEvents = "none";
                }
            }
        }else{
            document.getElementById("cart").style.display = "none";
            let pTags = document.querySelectorAll(".main-home, .shop-page");
            let blurTags = pTags[0].childNodes;
            for(let i=0; i< blurTags.length; i++){
                if(blurTags[i].id!=="cart"){
                    blurTags[i].style.filter = "blur(0px)"
                    blurTags[i].style.pointerEvents = "auto";
                }
            }
        }
    },[dispCart])

    //display cart
    useEffect(() => {
        setCartitems([]);
        for(let i=0; i<cartProducts.length; i++){
            setCartitems(cartItems => [...cartItems,
                <React.Fragment key={cartProducts[i].title}>
                <Table.Row className='cart-row' key={cartProducts[i].title+"tableR"}>
                    <Table.Cell width={'40%'} justify={'center'} >{cartProducts[i].title}</Table.Cell>
                    <Table.Cell width={'5%'} justify={'center'} >{cartProducts[i].quantity}</Table.Cell>
                    <Table.Cell width={'5%'} justify={'center'} >{cartProducts[i].price}</Table.Cell>
                    <Table.Cell width={'50%'} justify={'center'}>
                        <div className='cart-edit'>
                            <button onClick={() => handleRemove(cartProducts[i].title)} className='remove'>Remove</button>
                            <div className='adddel'>
                            <MinusIcon onClick={() => handleDel(cartProducts[i].title, 1, cartProducts[i].price, 
                                cartProducts[i].originalPrice)}></MinusIcon>
                            <PlusIcon onClick={() => handlePlus(cartProducts[i].title, 1, cartProducts[i].price, 
                                cartProducts[i].originalPrice)}></PlusIcon>
                            </div>
                        </div>
                    </Table.Cell>
                </Table.Row>
                </React.Fragment>
            ])
        }
    },[cartProducts])

    //if cart is empty display empty
    useEffect(() => {
        if(cartItems.length>0){
            document.getElementById('empty').style.display = "none";
        }else{
            document.getElementById('empty').style.display = "flex";
        }
    },[cartItems])

    return(
        <div style={{display: "none"}} id='cart' className="cart">
            <div className='cart-head'>
                <h2>CART</h2>
            </div>
            <div className='cart-contents'>
                <Table.Root className='main-table'>

                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell width={'40%'} justify={'center'}>Product Name</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell width={'5%'} justify={'center'}>Quantity</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell width={'5%'} justify={'center'}>Price</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell width={'50%'} justify={'center'}></Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body className='tableB'>
                        {addItems()}
                    </Table.Body>

                </Table.Root>
            <div>
                <p className='empty' id='empty'>Your cart is empty!</p>
            </div>
            <p className='total'>Total: ${totalPrice}</p>
            </div>
            <div>
                <button className='close' onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default Cart