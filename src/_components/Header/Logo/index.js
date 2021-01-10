import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../_assets/images/logo.svg'
import './logo.scss'

const Index = () => {
  return (
    <Link to='/' className="company-logo">
      <img className="logo-image" src={logo} alt="React Pizza"/>
      <div className="logo-text-container">
        <h1 className="company-title">REACT PIZZA</h1>
        <p className="company-description">самая вкусная пицца во вселенной</p>
      </div>
    </Link>
  )
}

export default Index
