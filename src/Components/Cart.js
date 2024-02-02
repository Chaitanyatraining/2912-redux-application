import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartData = useSelector(state => state.cart)
  console.log('cartData', cartData)
  return (
    <div>
      <h2>Cart Page</h2>
      {
        cartData && cartData.length > 0 ? (
          cartData.map((product) => (
            <div className='row'>
              <div className='col-md-4'>
                <img src={product.image} className='img-fluid h-50' />
              </div>
              <div className='col-md-4'>
                <h4>{product.category}</h4>
                <p>{product.description}</p>
              </div>
              <div className='col-md-4'>
                <h5>Price: ${product.price}</h5>
                <button className='btn btn-danger'>Remove</button>
              </div>
            </div>
          ))
        ) :
          <p>Please Add some products</p>
      }
    </div>
  )
}

export default Cart