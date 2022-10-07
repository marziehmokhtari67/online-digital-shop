import React from 'react'
import asus from './../../assets/images/asus.jpg'
import lenovo from './../../assets/images/lenovo.jpg'
import watch from './../../assets/images/watch.jpg'
import mobile from './../../assets/images/mobile.jpg'
import Carousel from 'react-bootstrap/Carousel';
function ImageSlider() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={asus}
      
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 "
      
        src={watch}
        alt="Third slide"
      />
     

     
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100 "
    
        src={lenovo}
        alt="Second slide"
      /> 

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
      
        src={mobile}
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
   
  )
}

export default ImageSlider

