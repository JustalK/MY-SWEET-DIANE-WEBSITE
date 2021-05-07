import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.scss'

const CustomSlider = (props) => {
  const settings = {
    infinite: true,
    afterChange: props.onChange
  }
  if (props.autoplaySpeed) {
    settings.autoplaySpeed = true
    settings.autoplaySpeed = 5000
    settings.speed = 500
  }
  return (
    <Slider {...settings} className={styles.slider}>
      {props.children}
    </Slider>
  )
}

export default CustomSlider
