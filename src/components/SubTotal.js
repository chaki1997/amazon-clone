import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'
function SubTotal(price) {
    const [{basket}]=useStateValue()
  
  return (
    <div className='subtotal'>
        {/* price */}
        <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    subTotal ({basket.length} items):
                    <strong>
                        {value}    
                    </strong>    
                </p>  
                <small className="subtotal__gift">
                    <input type="checkbox"/>
                    this order contains
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"$"}
        />
        <button>Proceeed to Checkout</button>
    </div>
  )
}

export default SubTotal