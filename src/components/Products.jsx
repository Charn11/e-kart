import { useEffect, useState, useContext } from 'react'
import Card from './card';
import '/src/styles/products.css'
import { CategoryContext } from '../App'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);
    const [gridVal, setGrid] = useState("repeat(5, 1fr)");
    const categoryValue = useContext(CategoryContext);
    const value = categoryValue.value;

    useEffect(() => {
        async function getData(){
            try{
                    let data = await fetch('https://fakestoreapi.com/products');
                    let response = await data.json();
                    setLoadProducts(true);
                    setProducts(response);
                    console.log(response)
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
        if(value!=="All"){
            if(screen.width>1024){
                setGrid("repeat(auto-fit, minmax(50%, min-content))");
            }else{
                setGrid("repeat(10, min-content)")
            }
        }else{
            if(screen.width>1024){
                setGrid("repeat(5, 1fr)");
            }else{
                setGrid("repeat(10, 1fr)")
            }
        }
    },[value, screen.width])
    
    return(
        <div className="products" style={{gridTemplateRows: gridVal}}>
            <Card products={products} loadProducts={loadProducts} ></Card>
        </div>
    )
}

export default Products;