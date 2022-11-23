import React from 'react';
import Image from '../assets/shop_01.jpg';

export default function FeaturedProduct() {
  return (
    <div class="col-12 col-md-4 mb-4">
    <div class="card h-100">
        <a href="shop-single.html">
            <img src={Image} class="card-img-top" alt="..." />
        </a>
        <div class="card-body">
            <ul class="list-unstyled d-flex justify-content-between">
                <li>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-warning fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                    <i class="text-muted fa fa-star"></i>
                </li>
                <li class="text-muted text-right">$240.00</li>
            </ul>
            <a href="shop-single.html" class="h2 text-decoration-none text-dark">Gym Weight</a>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
            </p>
            <p class="text-muted">Reviews (24)</p>
        </div>
    </div>
</div>
  )
}
