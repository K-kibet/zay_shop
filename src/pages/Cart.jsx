import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
const KEY = process.env.REACT_APP_STRIPE



function Cart() {
  const cart = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
      setStripeToken(token);
  }

  return (
<section class="h-100 h-custom" style={{backgroundColor: "#d2c9ff"}}>
  <div class="container py-2 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12">
        <div class="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
          <div class="card-body p-0">
            <div class="row g-0">
              <div class="col-lg-8">
                <div class="p-5">
                  <div class="d-flex justify-content-between align-items-center mb-5">
                    <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 class="mb-0 text-muted">3 items</h6>
                  </div>

                  {
                    cart.products.map(product => {
                      return (
                        <div class="row mb-4 d-flex justify-content-between align-items-center pb-2 border-bottom border-secondary">
                        <div class="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={product.img}
                            class="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-3">
                          <h6 class="text-muted">{product.title}</h6>
                          <h6 class="text-black mb-2">{product.description}</h6>
                          <div className="d-flex align-items-center  w-100">
                            <span>Size: <small className='text-muted'>{product.size}</small></span> 
                            <small className='rounded-circle  ms-4' style={{width: '10px', height: '10px', background: product.color}}></small>
                          </div>
                          
                        </div>
                        <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button class="btn btn-link px-2">
                            <i class="fas fa-minus"></i>
                          </button>
    
                          <div className='py-2 ps-2 pe-2 border d-flex align-items-center justify-content-center'>{product.quantity}</div>
    
                          <button class="btn btn-link px-2">
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 class="mb-0">${product.price * product.quantity}</h6>
                        </div>
                        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
                        </div>
                      </div>
                      )
                    })
                  }

                  <div class="pt-5">
                    <h6 class="mb-0"><a href="/shop" class="text-body"><i
                          class="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 bg-grey">
                <div class="p-5">
                  <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  <hr class="my-4" />

                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">items 3(subtotal)</h5>
                    <h5>€ {cart.total}</h5>
                  </div>
                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">Standard Shipping</h5>
                    <h5>€ 5.00</h5>
                  </div>
                  <div class="d-flex justify-content-between mb-4">
                    <h5 class="text-uppercase">Shipping Discount</h5>
                    <h5>€ -5.00</h5>
                  </div>

                  <hr class="my-4" />

                  <div class="d-flex justify-content-between mb-5">
                    <h5 class="text-uppercase">Total price</h5>
                    <h5>€ {cart.total}</h5>
                  </div>

                                {stripeToken ? (<span>processing Pease Wait</span>) :
            (<StripeCheckout
            name='nutricon'
            image=''
            billingAddress
            shippingAddress = 'You total is $20'
            amount={cart.total * 100}
            token={onToken} 
            stripeKey={KEY}>
              <button type="submit" class="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">CHECKOUT NOW</button>
            </StripeCheckout>)
            }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Cart
