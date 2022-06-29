import React from 'react'

function Products({id, title, image, price, rating}) {
  return (
    <div className='products'>
        <p>{title}</p>
        <p className="products__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <p className="products__rating">
            {
                Array(rating).fill()
                .map((_)=>{
                    <p></p>
                })
            }
        </p>
    </div>
  )
}

export default Products