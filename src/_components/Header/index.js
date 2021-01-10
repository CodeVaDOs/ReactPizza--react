import React from 'react'
import Logo from './Logo'
import { useLocation } from 'react-router-dom'
import CartButton from './CartButton'
import './header.scss'

const Index = () => {
  const { pathname: path } = useLocation()

  return (
    <div className="header">
      <Logo/>
      {path === '/' && <CartButton/>}
    </div>
  )
}

export default Index
