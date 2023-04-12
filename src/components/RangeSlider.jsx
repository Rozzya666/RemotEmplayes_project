import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react'

import "../style.css";

export default function RangeSlider({children, ...props}) {
    
  return (
    <>
        <Slider {...props} className='rangeInput' />
        {/* <Ran /> */}
    </>
  )
}
