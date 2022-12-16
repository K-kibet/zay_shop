import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {useLocation} from 'react-router-dom';
import { addProduct } from '../redux/cartRedux';
import {publicRequest} from '../requestMethods';
import Cart from './Cart';

function Single() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState(''); 
  const dispatch = useDispatch();

  useEffect(() => {
      const fetchProduct = async () => {
          try {
              const res = await publicRequest.get('/products/' + id)
              setProduct(res.data);
          } catch (error) {
              console.log(error);
          }
      }
      fetchProduct();
  }, [id])

  const handleQuantity = (type) => {
    if(type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleClick = () => [
    dispatch(addProduct({...product, quantity, color, size}))
  ]
  return (
    <div className='single container'>
      <div className="wrapper d-flex" style={{
        padding: '30px'
      }}>
        <div className="img-container flex-fill w-100" >
          {product && 
          <img className='w-100 vh-90' src={product.img} alt="" 
          style={{
            objectFit: 'cover',
          }}/>}
        </div>
        <div className="info flex-fill w-100 p-3 border" >
          <h1 className='fw-200'>{product && product.title}</h1>
          <p className="desc my-2 mb-2">
            {product && product.description}
          </p>
          <div className="price mt-3" style={{
            fontSize: '35px',
            fontWeight: 300
          }}>${product && product.price}</div>
          <div className="filterContainer d-flex justify-content-between w-50 my-5 mb-5">
            <div className="filter d-flex align-items-center">
              <span className='small me-2'>Color</span>
              {
                product &&  product.color.map(c => {
                  return (
                    <span className="rounded-circle me-2" style={{
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                      background: c
                    }} key={c} onClick={() => setColor(c)}/>
                  )
                })
              }
            </div>
            <div className="filter d-flex align-items-center">
              <span className='small me-2 '>Size</span>
              <select name="sizes m-5 p-5" id="" onChange={(e) => setSize(e.target.value) }>
                {
                  product && product.size.map(s => {
                    return <option key={s} >{s}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div className="add-container d-flex align-items-center justify-content-between w-50 mb-3">
            <div className="amount-container d-flex align-items-center">
                <button className="btn btn-outline-success py-1" onClick={() => handleQuantity('dec')}>-</button>
                <div className='border border-success d-flex align-items-center justify-content-center mx-2 me-2' style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '5px'
                }}>{quantity}</div>
                 <button className="btn btn-outline-success py-1" onClick={() => handleQuantity('inc')}>+</button>
            </div>
            <button className="btn btn-outline-success p-2" onClick={handleClick}>ADD TO CART</button>
          </div>
          
        </div>
        
      </div>
      <Cart />
    </div>
  )
}

export default Single
