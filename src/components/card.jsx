import { useEffect, useState } from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import '/src/styles/card.css'

const Card = (props) => {

    let products = props.products;
    const [item, setItem] = useState(1);

    function starStyle(val){
        if(val>=4){
            return(
                {backgroundColor:'lightgreen'}
            )
        }else if(val<2){
            return(
                {backgroundColor:'lightcoral'}
            )
        }else{
            return(
                {backgroundColor:'yellow'}
            )
        }
    }
    
    function createCard(){
        return(
            products.map((product) => (
                <div className='card-container' key={product.title}>
                    <div className='image-container'>
                        <img src={product.image} alt={product.title}></img>
                    </div>
                    <div className='title-container'>{product.title}</div>
                    <div className='rating'>
                        <div className='star' style={starStyle(product.rating.rate)}>{product.rating.rate} <StarFilledIcon></StarFilledIcon></div>
                        <div className='rating-count'>{product.rating.count} ratings</div>
                    </div>
                    <div className='cart-container'>
                        <div className='remove-cart'><img src='src/assets/remove_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                        <div className='cart-count'><input type='number' placeholder='Quantity' onChange={e => setItem(e.target.value)}></input></div>
                        <div className='add-cart'><img src='src/assets/add_shopping_cart_FILL0_wght400_GRAD0_opsz24.svg'></img></div>
                    </div>
                </div>
            ))
        )
    }

    return(
        createCard()
    )
}

export default Card;