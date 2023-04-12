import React from 'react'
import { useState } from 'react'
import BtnsBlock from './btns_block'
import { showSlides } from './showSlides'
import SliderThirdContent from './SliderThirdContent'

export default function SliderThird() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [countSlide,setCountSlide] = useState(1)
    const [rangeInputValue, setRangeInputValue] = useState(33.3)

    const addSlideThird = (e) => {
        if(countSlide < 3) {
            setCountSlide(prev => prev + 1)
            setRangeInputValue(prev => prev + 33.3)
        }
        else{
            setCountSlide(1)
            setRangeInputValue(33.3)
        }
        
      }
      const sliceSlideThird = (e) => {
        
        setCountSlide(prev => prev - 1)
        setRangeInputValue(prev => prev - 33.3)
        
        if (countSlide <= 1){
            setCountSlide(3)
            setRangeInputValue(99.9)
        }
        
      }

    const len = showSlides.length - 1;
  return (
    <div className='slider-container'>
        <SliderThirdContent activeIndex={activeIndex} imageSlider={showSlides}/>
        <BtnsBlock
            rangeInputValue={rangeInputValue}
            countSlide={countSlide}
            sliceSlideThird={sliceSlideThird}
            addSlideThird={addSlideThird}
            prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
            }
            nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
            }
        />
    </div>
  )
}
