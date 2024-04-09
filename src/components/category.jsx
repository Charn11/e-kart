import '/src/styles/category.css'
import { Link } from "react-router-dom";
import { CategoryContext, ThemeContext } from '../App'
import { useContext, useEffect } from 'react'

function Category(){

    const categoryValue = useContext(CategoryContext);
    const setValue = categoryValue.setValue;

    const { theme } = useContext(ThemeContext);
    const [mode, setMode] = theme;

    //change theme
    useEffect(() => {
        if(mode==='dark'){
            document.getElementById("category-container").style.backgroundColor = "black"
            document.getElementById("category-container").style.color = "white"
        }
        if(mode==='light'){
            document.getElementById("category-container").style.backgroundColor = "white"
            document.getElementById("category-container").style.color = "black"
        }
    },[mode])

    return(
        <section>
            <div className='category-container' id='category-container'>
                <div className='p-container'>
                    <p id='p-cont'>CATEGORIES</p>
                </div>
                <div className='catImg-container'>
                    <Link to="shop" onClick={() => setValue("men's clothing")}>
                    <div className='second-container'>
                        <img src="/cat3.webp" alt="men's clothing" />
                        <p>Men's Clothing</p>
                    </div>
                    </Link>
                    <Link to="shop" onClick={() => setValue("jewelery")}>
                    <div className='second-container'>
                        <img src="/cat2.webp" alt="jewellery" />
                        <p>Jwellery</p>
                    </div>
                    </Link>
                    <Link to="shop" onClick={() => setValue("electronics")}>
                    <div className='second-container'> 
                        <img src="/cat1.webp" alt="electronics" />
                        <p>Electronics</p>
                    </div>
                    </Link>
                    <Link to="shop" onClick={() => setValue("women's clothing")}>
                    <div className='second-container'>
                        <img src="/cat4.webp" alt="women's clothing" />
                        <p>Women's Clothing</p>
                    </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Category;