import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../Redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

const Products = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.data)
  console.log(products)
  useEffect(() => {
    // getUsersData()
    dispatch(fetchProduct())
  }, [])

  // const getUsersData = async () => {
  //   const response = await fetch('https://fakestoreapi.com/products')
  //   const data = await response.json()
  //   setProducts(data)
  //   console.log('data', data)
  // }

  return (
    <div className='container'>
      <h2>Products</h2>
      <div className='row'>
        {
          products && products.length > 0 ? (
            products.map((product) => (
              <div className='col-md-3'>
                <Link to={`/product/${product.id}`}>
                  <div className='card'>
                    <img src={product.image} className='img-fluid' />
                    <h5>{product.category}</h5>
                  </div>
                </Link>
              </div>
            ))
          ) : <p>Loading...</p>
        }
      </div>
    </div>
  )
}

export default Products