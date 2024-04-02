import React, { useEffect, useState, useContext } from 'react'
import Card from './card';
import '/src/styles/products.css'
import { GridContext } from '../App'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);
    const [gridVal, setGrid] = useState("");
    const grid = useContext(GridContext)
    const updateGrid = grid.updateGrid;
    const setUpdate = grid.setUpdate;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        async function getData(){
            try{
                    let data = await fetch('https://fakestoreapi.com/products');
                    let response = await data.json();
                    setLoadProducts(true);
                    setProducts(response);
                }
            catch{
                console.error("error")
            }
        }
        if(!loadProducts){
            getData();
        }
    },[])

    useEffect(() => {
        function reportWindowSize() {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', reportWindowSize)
        return () => window.removeEventListener('resize', reportWindowSize)
    },)

    function handleGrid(){
        let cards = document.getElementsByClassName("card-container")
        let length = cards.length;
        if(windowWidth>1024){
            if(length<=4){ 
                setGrid("repeat("+1+", 1fr)");
            }
            else{
                let i=Math.ceil(length/4);
                setGrid("repeat("+i+", 1fr)");
            }
        }else{
            if(length<=2){ 
                setGrid("repeat("+1+", 1fr)");
            }else{
                let i=Math.ceil(length/2);
                setGrid("repeat("+i+", 1fr)");
            }
        }
    }

    useEffect(() => {
        handleGrid();
        setUpdate(false);
    },[updateGrid, windowWidth])
    
    return(
        <main>
        <div className="products" style={{gridTemplateRows: gridVal}}>
            <Card products={products} loadProducts={loadProducts} ></Card>
        </div>
        </main>
    )
}

export default Products;