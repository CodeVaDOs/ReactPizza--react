import React from 'react'
import PizzaCard from '../PizzaCard'

import './cardList.scss'

const Index = () => {
  return (
    <div className="card-list">
      {[1, 2, 3, 4, 5, 6]
        .map((item, index) => <PizzaCard key={index}/>)}
    </div>
  )
}

export default Index
