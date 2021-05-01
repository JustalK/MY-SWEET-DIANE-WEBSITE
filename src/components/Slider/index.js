import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './styles.module.scss'

const CustomSlider = (props) => {
  return (
    <Slider className={styles.slider}>
      {props.children}
    </Slider>
  )
}

export default CustomSlider
