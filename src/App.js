import React from 'react'
import { Route } from 'react-router-dom'

import Header from './_components/Header'
import Container from './_components/Container'
import './_assets/fonts.css'
import './styles.scss'

const Home = React.lazy(() => import('./_pages/HomePage'))
const Cart = React.lazy(() => import('./_pages/CartPage'))

function App () {
  return (
    <div className="App">
      <Header/>
      <hr className="container-separator"/>

      <Container>
        <Route exact path='/' component={Home}/>
        <Route exact path='/cart' component={Cart}/>
      </Container>

    </div>
  )
}

export default App
