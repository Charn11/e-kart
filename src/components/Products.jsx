import { useEffect } from 'react'

const Products = () => {

    useEffect(() => {
        async function getData(){
            let data = await fetch('https://fakestoreapi.com/products');
            let response = data.json();
            console.log(response);
        }

        getData();
    },[])

    
    return(
        <div className="products">

        </div>
    )
}

export default Products;