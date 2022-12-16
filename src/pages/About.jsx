import React from 'react'
import Brands from '../components/Brands';
import Image from '../assets/about-hero.svg';
import Featured from '../components/Featured';

function About() {
  return (
    <div className='about'>
      <section class="bg-success py-5">
        <div class="">
            <div class="row align-items-center py-5">
                <div class="col-md-8 text-white">
                    <h1>About Us</h1>
                    <p className='fz-14 fw-300 p-4' style={{
                      fontFamily: "monospace"
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="col-md-4">
                    <img src={Image} alt="About Hero" />
                </div>
            </div>
        </div>
      </section>
      <Featured />
      <Brands />
    </div>
  )
}

export default About
