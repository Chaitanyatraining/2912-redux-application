import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice'

const Cart = () => {
  const cartData = useSelector(state => state.cart)
  const dispatch = useDispatch()

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
                <button className='btn btn-danger' 
                onClick={()=> dispatch(remove(product.id))}
                >Remove</button>
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