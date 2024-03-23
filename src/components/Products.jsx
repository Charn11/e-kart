import { useEffect, useState } from 'react'
import Card from './card';
import '/src/styles/products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loadProducts, setLoadProducts] = useState(false);

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
                console.log("error")
            }
        }
        if(!loadProducts){
            getData();
        }
    },[])
    
    return(
        <div className="products">
            <Card products={products}></Card>
        </div>
    )
}

export default Products;