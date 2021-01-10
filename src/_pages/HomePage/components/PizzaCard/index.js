import React from 'react'
import pizzaImage from '../../../../_assets/images/pizza.png'
import './pizzaCard.scss'

const Index = (props) => {
  return (
    <div className="pizza-card">
      <img className="pizza-image" src={pizzaImage} alt="Чизбургер-пицца"/>

      <h2 className="pizza-name">Чизбургер-пицца</h2>

      <div className="setting-container">
        <div className="setting-type">
          <form>
            <input checked="true" name="type" value="0" type="radio"/>
            <label className="type-radio">тонкое</label>
          </form>
          <form>
            <input name="type" value="1" type="radio"/>
            <label className="type-radio">традиционное</label>
          </form>
        </div>
        <div className="setting-size">
          <form>
            <input checked="true" name="size" value="26" type="radio"/>
            <label className="size-radio">26 см.</label>

          </form>
          <form>
            <input name="size" value="30" type="radio"/>
            <label className="size-radio">30 см.</label>

          </form>
          <form>
            <input disabled name="size" value="40" type="radio"/>
            <label className="size-radio">40 см.</label>

          </form>
        </div>
      </div>

      <div className="price-container">
        <p className="price">от 395 ₽</p>
        <button className="add-button"><span className="plus-icon"/>Добавить</button>
      </div>
    </div>
  )
}

export default Index
