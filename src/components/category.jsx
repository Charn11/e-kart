import { useState, useEffect } from 'react'
import '/src/styles/category.css'

function Category(){
    return(
        <section>
            <div className='category-container'>
                <div className='p-container'>
                    <p>CATEGORIES</p>
                </div>
                <div className='catImg-container'>
                    <div className='second-container'>
                        <img src="src/assets/cat3.webp" alt="men's clothing" />
                        <p>Men's Clothing</p>
                    </div>
                    <div className='second-container'>
                        <img src="src/assets/cat2.webp" alt="jewellery" />
                        <p>Jwellery</p>
                    </div>
                    <div className='second-container'> 
                        <img src="src/assets/cat1.webp" alt="electronics" />
                        <p>Electronics</p>
                    </div>
                    <div className='second-container'>
                        <img src="src/assets/cat4.webp" alt="women's clothing" />
                        <p>Women's Clothing</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;