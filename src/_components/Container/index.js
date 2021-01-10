import React from 'react'
import PropTypes from 'prop-types'
import './container.scss'

const Index = ({ children }) => {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}

Index.propTypes = {
  children: PropTypes.element.isRequired
}

export default Index
