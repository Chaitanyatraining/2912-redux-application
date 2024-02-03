import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { add } from '../Redux/CartSlice'
import { useDispatch } from 'react-redux'

const Product = () => {
    const [product, setProduct] = useState({})
    const [added, setAdded] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }

    const handleAdd = (product) => {
        dispatch(add(product))
        setAdded(true)
    }

    return (
        <div>
            <h2>Product details page</h2>
            {
                Object.keys(product).length > 0 ? (
                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <img src={product.image} className='img-fluid' />
                        </div>
                        <div className='col-md-6'>
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <h5>{product.category}</h5>
                            <span className='bg-info px-3'>Price: {product.price}</span>
                            <div className='mt-2'>
                                <button className='btn btn-warning'
                                    onClick={()=>{handleAdd(product)}}
                                >{added ? 'Added' : 'Add to Cart'}</button>
                            </div>
                        </div>
                    </div>
                ) : <p>Loading...</p>
            }
        </div>
    )
}

export default Product