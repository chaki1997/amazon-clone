import React from 'react'
import './Home.css'
import Products from '../components/Products'
function Home() {
  return (
    <div className='home'>
        <img
            className='home__images'
            src='./61BvxKSpy3L._SX3000_.jpg' alt='home_banner' />
        {/* Product id, title, price */}
        <Products
            id="12"
            title='some'
            image=""
            price="12"
            rating="5"
        />
    </div>
  )
}

export default Home