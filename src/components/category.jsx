import '/src/styles/category.css'
import { Link } from "react-router-dom";
import { CategoryContext } from '../App'
import { useContext, useState } from 'react'

function Category(){

    const categoryValue = useContext(CategoryContext);
    const value = categoryValue.value;
    const setValue = categoryValue.setValue;

    return(
        <section>
            <div className='category-container'>
                <div className='p-container'>
                    <p>CATEGORIES</p>
                </div>
                <div className='catImg-container'>
                    <Link to="shop" onClick={() => setValue("men's clothing")}>
                    <div className='second-container'>
                        <img src="src/assets/cat3.webp" alt="men's clothing" />
                        <p>Men's Clothing</p>
                    </div>
                    </Link>
                    <Link to="shop" onClick={() => setValue("jewelery")}>
                    <div className='second-container'>
                        <img src="src/assets/cat2.webp" alt="jewellery" />
                        <p>Jwellery</p>
                    </div>
                    </Link>
                    <Link to="shop" onClick={() => setValue("electronics")}>
                    <div className='second-container'> 
                        <img src="src/assets/cat1.webp" alt="electronics" />
                        <p>Electronics</p>
                    </div>
                    </Link>
                    <Link to="shop" onClick={() => setValue("women's clothing")}>
                    <div className='second-container'>
                        <img src="src/assets/cat4.webp" alt="women's clothing" />
                        <p>Women's Clothing</p>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Category;