import React from 'react';
import './sliderThird.css';
export default function SliderThirdContent({imageSlider, activeIndex}) {
    
  return (
    <div>
        {imageSlider.map((image, idx) => {
            return(
                <div key={idx} className={idx === activeIndex ? 'slider_main slides active' : 'inactive'}>
                    <img className='slide_image' src={image.image} alt={image.title} />
                    <div className='right_block_content'>
                        <h2 className='slide_h2'>{image.title}</h2>
                        <h3 className='slide_h3'>{image.notes}</h3>
                        <p className='slide_p'>{image.desc}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
