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
        <div className="home__row">
        <Products
            id="1"
            title='some 1'
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
            price={155}
            rating={4}
        />
        <Products
            id="2"
            title='some 2'
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"
            price={800}
            rating={3}
        />
        </div>

        {/* another Row */}

        <div className="home__row">
        <Products
            id="3"
            title='some 4'
            image="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY200_.jpg"
            price={800}
            rating={3}
        />
        <Products
            id="4"
            title='some 5'
            image="https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_SY200_.jpg"
            price={300}
            rating={4}
        />
         <Products
            id="5"
            title='some 6'
            image="https://m.media-amazon.com/images/I/81EVdWdmOKL._AC_SY200_.jpg"
            price={15}
            rating={4}
        />
      
        </div>

        {/* one  */}
        <div className="home__row">
        <Products
            id="6"
            title='some 7'
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
            price={1000}
            rating={4}
        />
  
      
        </div>
    </div>
  )
}

export default Home