import React from 'react'
import {useStateValue} from '../StateProvider'
import './Checkout.css'
import CheckoutProducts from '../components/CheckoutProducts'
import SubTotal from '../components/SubTotal'

function Checkout() {
    const [{basket}]= useStateValue()
  return (
    <div className='checkout'>
        <img 
            className='checkout__ad'
            src="https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg"/>

            {
                basket?.length===0 ?(
                    <div>
                        <h2>Your Shopping Basket is empty</h2> 
                    </div>
                ):(
                    <div>
                        <h2>Your Shopping basket </h2>


                        {/* List out all of the Checkout Products */}
                        {basket.map(item=>{
                            return(
                             <CheckoutProducts
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                             />
                            )
                        })}
                       
                    </div>
                )
            }
            <SubTotal
                    price            
            />
    </div>
  )
}

export default Checkout