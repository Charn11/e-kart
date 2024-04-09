import React, { useEffect, useState, useContext } from 'react'
import Card from './card';
import '/src/styles/products.css'
import { GridContext, ThemeContext } from '../App'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);
    const [gridVal, setGrid] = useState("");
    const grid = useContext(GridContext)
    const updateGrid = grid.updateGrid;
    const setUpdate = grid.setUpdate;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("products").style.backgroundColor = "black"
            document.getElementById("products").style.color = "white"
        }
        if(mode==='light'){
            document.getElementById("products").style.backgroundColor = "white"
            document.getElementById("products").style.color = "black"
        }
    },[mode])

    //get product data
    useEffect(() => {
        async function getData(){
            try{
                    let data = await fetch('https://fakestoreapi.com/products');
                    let response = await data.json();
                    setLoadProducts(true);
                    setProducts(response);
                }
            catch{
                let rem=document.getElementById('products').childNodes;
                rem.forEach(e => {
                    e.remove();
                })
                let parent = document.getElementById('products')
                let jsonError = document.createElement('div');
                jsonError.setAttribute('id','jError')
                jsonError.innerText = "Couldn't load products. Please refresh or try again after sometime :(";
                parent.appendChild(jsonError)
            }
        }
        if(!loadProducts){
            getData();
        }
    },[])

    //change products grid size based on screen width
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
        <div className="products" id='products' style={{gridTemplateRows: gridVal}}>
            <Card products={products} loadProducts={loadProducts} ></Card>
        </div>
        </main>
    )
}

export default Products;