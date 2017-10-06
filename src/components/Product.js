import React, { Component } from 'react'

class Product extends Component {
  render () {
    return (
      <div>
        <h3>{product.productName}</h3>
        <h4>${product.price}</h4>
        <p>{product.description}</p>
      </div>
    )
  }
}

export default Product
