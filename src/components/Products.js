import React from 'react'
import './Products.css'
import { useStateValue } from '../StateProvider'
function Products({id, title, image, price, rating}) {
    const [{basket}, dispatch]=useStateValue()
    const addToButton=()=>{
        // add item to basket
        dispatch({
            type:'add_to_basket',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
  return (
    <div className='products'>
        <div className='products__info'>
        <p>{title}</p>
        <p className="products__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="products__rating">
            {
                Array(rating).fill()
                .map((_, index)=>{
                    return(
                    <p key={index}>⭐</p>
                    )
                })
            }
        </div>
        </div>
        <img src={image} alt=""/>
        <button onClick={addToButton}>Add to Basket</button>
    </div>
  )
}

export default Products