import React from 'react'
import './Products.css'
function Products({id, title, image, price, rating}) {
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
        <button>Add to Basket</button>
    </div>
  )
}

export default Products