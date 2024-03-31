import '/src/styles/cart.css'
import React, { useEffect, useContext, useState } from "react";
import { CartContext, ItemContext } from "../App";
import { Table } from '@radix-ui/themes';
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

const Cart = () => {

    const cart = useContext(CartContext);
    const dispCart = cart.dispCart;
    const setDispCart = cart.setDispCart;

    const cartValues = useContext(ItemContext);
    const cartProducts = cartValues.cartProducts;
    const setCartProducts = cartValues.setCartProducts;

    const [cartItems, setCartitems] = useState([]);

    function handleClose(){
        setDispCart(false);
    }

    function addItems(){
        return cartItems;
    }

    useEffect(() => {
        if(dispCart===true){
            document.getElementById("cart").style.display = "block";
            let pTags = document.querySelectorAll(".main-home, .shop-page");
            let blurTags = pTags[0].childNodes;
            for(let i=0; i< blurTags.length; i++){
                if(blurTags[i].id!=="cart"){
                    blurTags[i].style.filter = "blur(25px)"
                }
            }
        }else{
            document.getElementById("cart").style.display = "none";
            let pTags = document.querySelectorAll(".main-home, .shop-page");
            let blurTags = pTags[0].childNodes;
            for(let i=0; i< blurTags.length; i++){
                if(blurTags[i].id!=="cart"){
                    blurTags[i].style.filter = "blur(0px)"
                }
            }
        }
    },[dispCart])

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
                            <button className='remove'>Remove</button>
                            <MinusIcon></MinusIcon>
                            <PlusIcon></PlusIcon>
                        </div>
                    </Table.Cell>
                </Table.Row>
                </React.Fragment>
            ])
        }
    },[cartProducts])

    useEffect(() => {
        if(cartItems.length>0){
            document.getElementById('empty').style.display = "none";
        }
        console.log(cartItems)
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
            </div>
            <div>
                <button className='close' onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default Cart