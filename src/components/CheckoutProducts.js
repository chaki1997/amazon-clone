import React from 'react'
import './CheckoutProducts.css';
import { useStateValue } from '../StateProvider';
function CheckoutProducts({id, title, image, price, rating}) {
    const [{basket}, dispatch]=useStateValue();

    const removeBasket=()=>{
        // remove item from basket

        dispatch({
            type:'remove_from_basket',
            id:id
        })
    }
    return (
    <div className='checkoutProducts'>
        <img className='checkoutProduct__image' src={image}  alt='kasd' />
    <div className="checkoutProduct__info">
        <p classname="checkoutProduct__title">{title}</p>
        <p classname="checkoutProduct__price">
           <small>$</small>
           <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
            {
                Array(rating).fill()
                .map((_, index)=>{
                    return(
                    <p key={index}>⭐</p>
                    )
                })
            }
        </div>

        <button onClick={removeBasket}>Remove From basket </button>
    </div>
    </div>
  )
}

export default CheckoutProducts