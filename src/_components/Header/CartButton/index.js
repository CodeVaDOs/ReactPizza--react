import React from 'react'
import { Link } from 'react-router-dom'
import './cartButton.scss'
import Cart from '../../../_assets/images/icons/cart.svg'

const Index = (props) => {
  return (
    <Link style={{ textDecoration: 'none' }} to="/cart">
      <button className='cart-button'>
        <span className="price">999 ₽</span>
        <span className="vertical-separator"/>
        <img src={Cart} alt="React Pizza cart"/>
        <span className="count-products">99</span>
      </button>
    </Link>
  )
}

export default Index
