import { AddShoppingCart } from '@mui/icons-material';
import React from 'react';
import Image from '../assets/shop_01.jpg';

export default function FeaturedProduct() {
  return (
    <div class="col-8 col-md-4 mb-2">
    <div class="card h-100">
        <a href="shop-single.html">
            <img src={Image} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
            <a href="shop-single.html" class="h2 text-decoration-none text-dark">Gym Weight</a>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
            </p>
            <div className="d-flex alig-items-center justify-content-between my-2">
                <span class="text-muted text-right list-style-none">$240.00</span>
                <a href={/*`/shop/${product._id}`*/ '#'} className='btn btn-outline-success'>Add <AddShoppingCart /></a>
            </div>
            
        </div>
    </div>
</div>
  )
}
