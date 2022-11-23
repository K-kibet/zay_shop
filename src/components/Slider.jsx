import React, { useState } from  'react';
import Image from '../assets/feature_prod_01.jpg';
import { slides } from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
    return (
    <div className="slider d-flex align-items-center justify-content-start bg-light overflow-hidden; position-relative w-100" style={{height: '300px'}}>
        <div className=" d-flex rounded-circle justify-content-center align-items-center  text-white bg-secondary t-0 b-0 position-absolute  start-0 mx-2" onClick={() => handleClick("right")} style={{width: '40px',height: '40px',zIndex:10}}>
            <i class="fa fa-chevron-left"></i>
        </div>
        <div className="wrapper d-flex justify-content-center align-items-center h-100 " style={{transform: `translateX(${slideIndex * -100}vw)`,  transition: 'all .3s  ease 0s'}}>
            {
                slides.map(slide => {
                    return (
                        <div className="slider  container d-flex align-items-center h-100" style={{width: '100vw',minWidth: '100vw'}} id={slide.id}>
                        <div className="image-container d-flex justify-content-center align-items-center h-100" style={{flex: 1,overflow: 'hidden'}}>  
                            <img src={slide.img} alt="" className='img-fluid' style={{objectFit: 'fill',objectPosition: 'center'}}/>                          
                        </div>
                        <div className="info d-flex justify-content-evenly text-dark align-items-start flex-column py-2 h-100" style={{flex: 1,padding: '50px'}}>
                            <h1 class="h1">{slide.title}</h1>
                            <p className='my-2'>
                                {slide.desc}
                            </p>
                            <a href={slide.link} className='btn btn-outline-success' role='button'>Shop Now</a>
                        </div>
                    </div>
                    )
                })
            }


        </div>

        <div className="d-flex rounded-circle justify-content-center align-items-center t-0 b-0 position-absolute text-white bg-secondary end-0 me-2" onClick={() => handleClick("right")} style={{width: '40px',height: '40px',zIndex:10}}>
            <i class="fa fa-chevron-right"></i>
        </div>
    </div>
    );
}

export default Slider;