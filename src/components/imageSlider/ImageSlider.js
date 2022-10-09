import React from 'react'
import asus from './../../assets/images/asus.jpg'
import lenovo from './../../assets/images/lenovo.jpg'
import watch from './../../assets/images/watch.jpg'
import mobile from './../../assets/images/mobile.jpg'
import Carousel from 'react-bootstrap/Carousel';
import {useStyles} from './../../styles/imageSlider/style'
function ImageSlider() {
  const classes=useStyles()
  return (
    <Carousel >
    <Carousel.Item>
      <img
        className={classes.image}
        src={asus}
      
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
    <img
        className={classes.image}
      
        src={watch}
        alt="Third slide"
      />
     

     
    </Carousel.Item>
    <Carousel.Item>
    <img
        className={classes.image}
    
        src={lenovo}
        alt="Second slide"
      /> 

    </Carousel.Item>
    <Carousel.Item>
      <img
        className={classes.image}
      
        src={mobile}
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
   
  )
}

export default ImageSlider

