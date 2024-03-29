import '/src/styles/cart.css'
import { useEffect, useContext, useState } from "react";
import { CartContext } from "../App";
import { Table } from '@radix-ui/themes';

const Cart = () => {

    const cart = useContext(CartContext);
    const dispCart = cart.dispCart;
    const setDispCart = cart.setDispCart;

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
        }
    },[dispCart])

    return(
        <div style={{display: "none"}} id='cart' className="cart">
            <h2>CART</h2>
            <div className='cart-contents'>
                <Table.Root>
                    <Table.Header>
                    <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                    </Table.Header>
                </Table.Root>
            </div>
        </div>
    )
}

export default Cart