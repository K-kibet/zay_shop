import { Search, ShoppingBag } from '@mui/icons-material';
import React, { useState } from 'react';
import Icon from '../assets/favicon.ico';

 const  Navbar = () => {
    const [user, setUser] = useState(null)
    return (
        <div className='navbar'>
            <a href="/" className="logo">
                <img src={Icon} alt="healthgen icon" />
            </a>
            <nav>

                <a href="/" title='home' className='active'>Home</a>
                <a href="/shop" title='books'>Shop</a>
                <a href="/about" title='posts'>About Us</a>
                <a href="/contact" title='write'>Contact</a>
                <a href="/admin" title='contact'>Admin</a>
            </nav>

            <div className='d-flex p-2'>
            <a class="nav-icon d-none d-lg-inline me-3" href="/search" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                <Search />
            </a>
            <a class="nav-icon d-none d-lg-inline me-3  position-relative" href="/cart" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                <ShoppingBag/>
                <span class="position-absolute top-0 left-100 translate-middle badge  rounded-pill bg-light text-dark">5</span>
            </a>

            {   !user && 
                <a  href="/settings" className="user-avatar position-relative">
                    <img src={Icon} alt="user-avatar" />
                    <i class="fa fa-user"></i>
                    <span class="position-absolute top-0 left-100 translate-middle badge  rounded-pill bg-danger text-danger">.</span>
                </a>
            }
            {
                user &&
                <div className="button-group">
                  <a href='/auth' title='register'>Get started</a>
                </div>
            }
            </div>

            

        </div>
    );
}

export default Navbar;