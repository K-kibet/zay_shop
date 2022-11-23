import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Navbar() {
    const [user, setUser] = useState(true);

    const quantity = useSelector(state => state.cart.quantity)
  return (
  <nav class="navbar navbar-expand-lg bg-light  navbar-light navbar-fixed-top shadow">
    <div class="container d-flex justify-content-between align-items-center">
        <a class="navbar-brand text-success logo h1 align-self-center " href="index.html">
            Zay
        </a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="nav justify-content-center">
            <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/shop">Shop</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
            </li>
        </ul>
        <div class="navbar align-self-center d-flex">
            <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                <div class="input-group">
                    <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..." />
                    <div class="input-group-text">
                        <i class="fa fa-fw fa-search"></i>
                    </div>
                </div>
            </div>
            <a class="nav-icon d-none d-lg-inline me-3" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                <i class="fa fa-fw fa-search text-dark mr-2"></i>
            </a>
            <a class="nav-icon position-relative text-decoration-none me-3" href="/cart">
                <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">{quantity}</span>
            </a>
            {
                user ? (
                    <a class="nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-user text-dark mr-3"></i>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </a>
                ) : (
                    <div className="text-end">
                        <a href='/login' className="btn btn-outline-success me-2" role='button'>Login</a>
                        <a href='/register' className="btn btn-outline-secondary me-2 " role='button'>Register</a>
                    </div>
                )
            }
        </div>
    </div>
  </nav>
  )
}
