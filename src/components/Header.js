import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { Search, ShoppingBasket } from '@mui/icons-material'
import { useStateValue } from '../StateProvider'
function Header() {
    const [{basket}]=useStateValue();
    console.log(basket)
  return (
    <nav className='Header'>
        {/* logo */}
        <Link to='/'>
        <img 
            className='Header__logo'
            src='https://www.seekpng.com/png/full/18-181177_amazon-logo-png-magnetic-rinse-cup-with-toothbrush.png'    
        />
        </Link>
        {/* search box */}
        <div className='header__search'>
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon"/>
        </div>
        {/* 3 Links */}
        <div className='header_nav'>
            <Link to="/login" className="Header__link">
                <div className="Header__option">
                    <span className='header__optionLineOne'>Hello</span>
                    <span  className="header__optionLineTwo">Sign In</span>
                </div>
            </Link>

            <Link to="/" className="Header__link">
                <div className="Header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span  className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>

            <Link to="/" className="Header__link">
                <div className="Header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>
            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasket className=""/>
                    <span>{basket?.length}</span>
                </div>
            </Link>
        </div>
        {/* Basket icon with Number */}
    </nav>
  )
}

export default Header