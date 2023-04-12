import React from "react";
import RangeSlider from "../RangeSlider";
import './sliderThird.css'
function Arrows({ prevSlide, nextSlide, addSlideThird, sliceSlideThird, countSlide, rangeInputValue }) {
    const doubledNext = () => {
        return(
            nextSlide(),
            addSlideThird()
        )
    }
    const doubledPrev = () => {
        return(
            prevSlide(),
            sliceSlideThird()
        )
    }
    
  return (
    <div className="arrows">
      <span className="prev1" onClick={doubledPrev}>
        &#10094;
      </span>
      <span className="next1" onClick={doubledNext}>
        &#10095;
      </span>
      <RangeSlider value={rangeInputValue} />
      <div style={{color: 'white', marginLeft: '5px'}} className="progress">{countSlide}/3</div>
    </div>
  );
}

export default Arrows;