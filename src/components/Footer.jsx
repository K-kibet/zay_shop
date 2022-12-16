
import { LocationOn, MailOutline, Phone } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='section-wrapper theme'>
               <div class="col-md-4 pt-5">
                    <h2 class="text-success h2 border-bottom pb-3 border-success">Zay Shop</h2>
                    <ul class="list-unstyled footer-link-list">
                        <li>
                            <LocationOn />
                            123 Consectetur at ligula 10660
                        </li>
                        <li>
                            <Phone />
                            <a class="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                        </li>
                        <li>
                            <MailOutline />
                            <a class="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                        </li>
                    </ul>
                </div>
                <section>
                    <h2>Featured</h2>
                    <div className='items-container'>
                        <a href='#' title='store'>Gym Accessories</a>
                        <a href='#'>Luxury</a>
                        <a>Sport Wear</a>
                        <a>Women's Shoes</a>
                    </div>
                </section>

                <section>
                    <h2>Zay</h2>
                    <div className='items-container'>
                        <a href='/'>Home</a>
                        <a href='/about'>About Us</a>
                        <a href='/shop'>Shop</a>
                        <a href='/contact'>Contact Us</a>
                    </div>
                </section>
            </div>

            <hr />

            <div className='footer-bottom'>
                <p>&copy; Zay 2022</p>
                <a>Privacy & cookies</a>
                <a>FAQ</a>
                <a>Help</a>
            </div>
        </div>
    );
}

export default Footer;